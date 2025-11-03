"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageTransitionContextType {
  startTransition: (href: string, clickPosition?: { x: number; y: number }) => void;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within PageTransitionProvider");
  }
  return context;
};

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const startTransition = (href: string, clickPosition?: { x: number; y: number }) => {
    if (clickPosition) {
      // Convert click position to percentage
      const x = (clickPosition.x / window.innerWidth) * 100;
      const y = (clickPosition.y / window.innerHeight) * 100;
      setPosition({ x, y });
    }
    setIsTransitioning(true);
    // Navigate after animation completes
    setTimeout(() => {
      window.location.href = href;
    }, 1500); // Match with animation duration
  };

  return (
    <PageTransitionContext.Provider value={{ startTransition, isTransitioning }}>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ 
              scaleY: 0,
            }}
            animate={{ 
              scaleY: 1,
              transition: { 
                duration: 1.2,
                ease: [0.83, 0, 0.17, 1],
              }
            }}
            className="fixed bg-stone-800 z-9999"
            style={{
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              transformOrigin: "center center",
            }}
          />
        )}
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
};

