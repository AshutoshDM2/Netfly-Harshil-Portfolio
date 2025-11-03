/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ParallaxProps {
  imageUrl: string;
  enabled?: boolean;
  height?:
  | string
  | { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  speed?: number;
  overlay?: boolean;
  overlayOpacity?: number;
  overlayColor?: string;
  position?: string;
  backgroundSize?: string;
  className?: string;
  children?: ReactNode;
}

export function Parallax({
  imageUrl,
  height = { xs: "auto" },
  overlay = false,
  overlayOpacity = 0.6,
  overlayColor = "0, 0, 0",
  className,
  children,
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ state to hold actual responsive height
  const [computedHeight, setComputedHeight] = useState<string>(
    typeof height === "string"
      ? height
      : height.md || height.lg || height.xs || "100vh" // stable SSR fallback
  );

  useEffect(() => {
    if (typeof height === "string") {
      setComputedHeight(height);
      return;
    }

    const updateHeight = () => {
      const width = window.innerWidth;
      if (width < 640 && height.xs) return setComputedHeight(height.xs);
      if (width < 768 && height.sm)
        return setComputedHeight(height.sm || height.xs || "500px");
      if (width < 1024 && height.md)
        return setComputedHeight(
          height.md || height.sm || height.xs || "500px"
        );
      if (width < 1280 && height.lg)
        return setComputedHeight(
          height.lg || height.md || height.sm || height.xs || "500px"
        );
      return setComputedHeight(
        height.xl || height.lg || height.md || height.sm || height.xs || "500px"
      );
    };

    updateHeight(); // run once
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [height]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ height: computedHeight }} 
    >
      <div className="fixed z-10 inset-0" >
        <div className="fixed top-10 left-10 z-30" >
          <Image  src="/images/logo.png" alt="Harshil Bhaita" width={100} height={100} className="w-16 md:w-20 xl:w-32 object-contain invert" />
        </div>
        <div className="h-full w-full flex justify-center items-center relative" >
        <div className="absolute inset-0 bg-black opacity-50 z-10" ></div>
          <h1 className="text-white text-4xl md:text-6xl xl:text-8xl font-bold relative z-20 mb-40 md:mb-0 ">Harshil Bhaita</h1>
        </div>
      </div>
      <div
        className="absolute inset-0  w-full h-full bg-no-repeat transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      />
      {overlay && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: `rgba(${overlayColor}, ${overlayOpacity})`,
          }}
        />
      )}
      <div className="relative z-10 h-full">
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}