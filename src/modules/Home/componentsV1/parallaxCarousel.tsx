/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArtWorkCaruselImagesDesktop } from "@/constants/ArtWorkData";
import { StaticImageData } from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

interface ParallaxCarouselProps {
  images?: StaticImageData[];
  height?:
    | string
    | { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  autoPlay?: boolean;
  autoPlayInterval?: number;
  overlay?: boolean;
  overlayOpacity?: number;
  overlayColor?: string;
  className?: string;
  children?: ReactNode;
  parallax?: boolean;
  parallaxSpeed?: number;
  fixedBackground?: boolean;
  backgroundPosition?: string;
}

export function ParallaxCarousel({
  images = ArtWorkCaruselImagesDesktop,
  height = { xs: "auto" },
  autoPlay = true,
  autoPlayInterval = 5000,
  overlay = false,
  overlayOpacity = 0.6,
  overlayColor = "0, 0, 0",
  className,
  children,
  parallax = true,
  parallaxSpeed = 0.5,
  fixedBackground = false,
  backgroundPosition = "bottom",
}: ParallaxCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute initial height without state
  const getInitialHeight = () => {
    if (typeof height === "string") return height;
    return height.md || height.lg || height.xs || "500px";
  };

  const [computedHeight, setComputedHeight] =
    useState<string>(getInitialHeight);

  // Handle responsive height
  useEffect(() => {
    if (typeof height === "string") return;

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

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [height]);

  // Parallax scroll effect
  useEffect(() => {
    if (!parallax || fixedBackground) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const elementTop = rect.top + scrollPosition;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate if element is in viewport
      if (
        scrollPosition + windowHeight > elementTop &&
        scrollPosition < elementTop + elementHeight
      ) {
        setScrollY(scrollPosition);
      }
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallax, fixedBackground]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const isMobile = useIsMobile();

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ 
        height: computedHeight,
        minHeight: computedHeight,
      }}
    >
      <div className="fixed z-10 inset-0 pointer-events-none">
        <div className="fixed top-10 left-10 z-30 pointer-events-auto">
          <img
            src="/images/logo.png"
            alt="Harshil Bhaita"
            width={500}
            height={500}
            className="w-16 md:w-20 xl:w-32 object-contain invert"
          />
        </div>
        <div className="h-full w-full flex justify-center items-center relative">
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        </div>
      </div>
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundAttachment : isMobile ? "" : "fixed",
                backgroundImage: `url(${imageUrl.src})`,
                backgroundSize: "cover",
                backgroundPosition: backgroundPosition,
                backgroundRepeat: "no-repeat",
                transform:
                  parallax && !fixedBackground
                    ? `translateY(${scrollY * parallaxSpeed}px)`
                    : "none",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: `rgba(${overlayColor}, ${overlayOpacity})`,
          }}
        />
      )}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="fixed left-4 bottom-[50vh] md:bottom-[63vh] z-10 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 transition-all duration-200 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="fixed right-4 bottom-[50vh] md:bottom-[63vh] z-10 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 transition-all duration-200 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Children Content */}
      <div className="relative z-10 h-full">
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}
