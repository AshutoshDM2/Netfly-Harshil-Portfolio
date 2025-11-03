"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageEntranceProps {
  children: ReactNode;
}

const PageEntrance = ({ children }: PageEntranceProps) => {
  return (
    <>
      <motion.div
        initial={{ 
          scaleY: 1,
        }}
        animate={{ 
          scaleY: 0,
          transition: { 
            duration: 1,
            ease: [0.83, 0, 0.17, 1],
            delay: 0.1
          }
        }}
        className="fixed bg-stone-800 z-9999 pointer-events-none"
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          transformOrigin: "center center",
        }}
      />
      <motion.div
        initial={{ opacity: 0, filter: "brightness(0)" }}
        animate={{ 
          opacity: 1,
          filter: "brightness(1)",
          transition: { 
            duration: 0.8,
            delay: 0.6,
            filter: {
              duration: 0.8,
              delay: 0.6
            }
          }
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageEntrance;

