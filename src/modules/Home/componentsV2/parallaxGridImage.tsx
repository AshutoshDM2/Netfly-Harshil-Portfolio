"use client";

import { ArtWorkGridImages } from "@/constants/ArtWorkData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode, useRef } from "react";

interface ParallaxGridImageProps {
  imageUrl?: string;
  title?: string;
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
  children?: ReactNode; // <-- ✅ safer type
}

export function ParallaxGridImage({
  imageUrl,
  height = { xs: "auto", md: "100vh" },
  overlay = false,
  overlayOpacity = 0.6,
  overlayColor = "0, 0, 0",
  className,
  children,
  title = "Parallax Grid Image",
}: ParallaxGridImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const getResponsiveHeight = () => {
    if (typeof height === "string") return height;

    // For SSR, default to the largest breakpoint
    if (typeof window === "undefined") return height.md || height.lg || "500px";

    const width = window.innerWidth;
    if (width < 640 && height.xs) return height.xs;
    if (width < 768 && height.sm) return height.sm || height.xs;
    if (width < 1024 && height.md) return height.md || height.sm || height.xs;
    if (width < 1280 && height.lg)
      return height.lg || height.md || height.sm || height.xs;
    return (
      height.xl || height.lg || height.md || height.sm || height.xs || "500px"
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden min-h-screen", className)}
      style={{ height: getResponsiveHeight() }}
    >
      <div className="fixed top-0 inset-0 w-full h-full bg-no-repeat transition-transform duration-300 ease-out z-0">
        <div className="grid grid-cols-2 md:grid-cols-4 relative h-full w-full">
          <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 w-full h-full z-10 flex justify-center items-center" >
              <h1 className="text-white text-4xl md:text-6xl xl:text-8xl font-bold">{title}</h1>
          </div>
          {ArtWorkGridImages.map((image, index) => (
            <Image
              key={index}
              className="w-full h-[150px] object-cover object-top"
              src={image.src}
              alt={`Art Work ${index + 1}`}
              width={500}
              height={200}
              quality={70}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
            />
          ))}
        </div>
      </div>
      {overlay && (
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundColor: `rgba(${overlayColor}, ${overlayOpacity})`,
          }}
        />
      )}
      <div className="relative z-20 h-full">
        <div className="w-full h-full">{children}</div>
      </div>
      <div className="fixed top-8 left-6 md:left-14" >
      <Image
        height={500}
        width={500}
        quality={85}
        priority
        className="w-16 md:w-20 xl:w-32 object-contain invert"
        src="/images/logo.png"
        alt="Harshil Bhaita"
      />
      </div>
    </div>
  );
}
