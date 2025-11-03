/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

const defaultImages = [
  "https://images.unsplash.com/photo-1682687742814-c96e1d2b0a9f?w=400&h=600",
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600",
  "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=400&h=600",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&h=600",
  "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=400&h=600",
  "https://images.unsplash.com/photo-1682687218147-9806132dc697?w=400&h=600",
  "https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?w=400&h=600",
  "https://images.unsplash.com/photo-1682687221363-72eeb6d3e0b4?w=400&h=600",
  "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=400&h=600",
  "https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=400&h=600",
  "https://images.unsplash.com/photo-1682687220795-796d3f6f7000?w=400&h=600",
  "https://images.unsplash.com/photo-1682687742814-c96e1d2b0a9f?w=400&h=600",
  "https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=400&h=600",
];

interface Skiper30Props {
  images?: string[];
  openingParallex?: string | null;
  closingParallex?: string | null;
  scrollHeight?: number;
  className?: string;
}

const GalleryGrid = ({
  images = defaultImages,
  openingParallex = null,
  closingParallex = null,
  scrollHeight = 300,
  className = "",
}: Skiper30Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Define the grid layout - matching the screenshot structure
  const gridLayout = [
    { col: 1, row: 1, span: 1, index: 0 }, // Top left
    { col: 2, row: 1, span: 1, index: 1 }, // Top middle
    { col: 3, row: 1, span: 2, index: 2 }, // Top right tall
    { col: 1, row: 2, span: 1, index: 3 }, // Second row left
    { col: 2, row: 2, span: 2, index: 4 }, // Second row middle tall
    { col: 3, row: 3, span: 1, index: 5 }, // Third row right
    { col: 1, row: 3, span: 2, index: 6 }, // Third row left tall
    { col: 2, row: 4, span: 1, index: 7 }, // Fourth row middle
    { col: 3, row: 4, span: 1, index: 8 }, // Fourth row right
    { col: 1, row: 5, span: 1, index: 9 }, // Fifth row left
    { col: 2, row: 5, span: 1, index: 10 }, // Fifth row middle
    { col: 3, row: 5, span: 1, index: 11 }, // Fifth row right
  ];

  return (
    <main className="w-full text-black bg-[#f5f5f0]">
      {openingParallex && (
        <div className="font-geist flex h-screen items-center justify-center gap-2">
          <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
            <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-linear-to-b after:from-white after:to-black after:content-['']">
              {openingParallex}
            </span>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className={cn("py-12 px-6 md:px-12", className)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[280px]">
          {images.slice(0, 12).map((image, index) => {
            const layout = gridLayout[index] || { col: 1, row: 1, span: 1, index };
            // Determine column: 0 = left, 1 = middle, 2 = right
            const column = index % 3;
            return (
              <ImageCard
                key={index}
                image={image}
                index={index}
                rowSpan={layout.span}
                column={column}
              />
            );
          })}
        </div>
      </div>

      {closingParallex && (
        <div className="font-geist relative flex h-screen items-center justify-center gap-2">
          <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
            <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-linear-to-b after:from-white after:to-black after:content-['']">
              {closingParallex}
            </span>
          </div>
        </div>
      )}
    </main>
  );
};

type ImageCardProps = {
  image: string;
  index: number;
  rowSpan?: number;
  column: number;
};

const ImageCard = ({ image, index, rowSpan = 1, column }: ImageCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds based on column
  // Middle column (column 1) has highest speed
  const yOffset = column === 1 ? 120 : column === 0 ? 40 : 40;
  const y = useTransform(scrollYProgress, [0, 1], [-yOffset, yOffset]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-sm bg-white shadow-sm hover:shadow-md transition-shadow duration-300",
        rowSpan === 2 && "row-span-2"
      )}
      style={{ y, scale }}
    >
      <motion.img
        src={image}
        alt={`Artwork ${index + 1}`}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export { GalleryGrid };
