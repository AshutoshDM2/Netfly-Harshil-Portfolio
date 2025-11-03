"use client";

import { useRef, useState, MouseEvent } from "react";
import gsap from "gsap";

interface ImageItem {
  id: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  rotation: number;
  width: number;
  height: number;
}

const InfiniteCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const offsetRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPosRef = useRef({ x: 0, y: 0, time: 0 });

  // Base image URLs
  const imageUrls = [
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&h=200",
    "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=200&h=200",
    "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=200&h=200",
    "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=200&h=200",
    "https://images.unsplash.com/photo-1682687218147-9806132dc697?w=200&h=200",
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&h=200",
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&h=200",
    "https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?w=200&h=200",
    "https://images.unsplash.com/photo-1682687220067-dced9a881b56?w=200&h=200",
  ];

  // Generate infinite grid layout with large spacing
  const generateInfiniteGrid = (): ImageItem[] => {
    const columns = 3;
    const rows = 4;
    const imageWidth = 250;
    const imageHeight = 300;
    const horizontalGap = 200; // Large gap between images horizontally
    const verticalGap = 200;   // Large gap between images vertically
    
    // Create a larger grid to simulate infinite canvas
    const tiles = [];
    const tilesCount = 7; // Number of grid tiles in each direction
    const centerTile = Math.floor(tilesCount / 2);

    for (let tileY = -centerTile; tileY <= centerTile; tileY++) {
      for (let tileX = -centerTile; tileX <= centerTile; tileX++) {
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < columns; col++) {
            const index = (row * columns + col) % imageUrls.length;
            const baseX = col * (imageWidth + horizontalGap);
            const baseY = row * (imageHeight + verticalGap);
            const tileOffsetX = tileX * (columns * (imageWidth + horizontalGap));
            const tileOffsetY = tileY * (rows * (imageHeight + verticalGap));
            
            tiles.push({
              id: `${tileX}-${tileY}-${row}-${col}`,
              src: imageUrls[index],
              alt: `Image ${index + 1}`,
              x: baseX + tileOffsetX,
              y: baseY + tileOffsetY,
              rotation: 0,
              width: imageWidth,
              height: imageHeight,
            });
          }
        }
      }
    }
    
    return tiles;
  };

  const [images] = useState<ImageItem[]>(generateInfiniteGrid());

  const updateCanvasPosition = (x: number, y: number, animate = true, spring = false) => {
    if (canvasRef.current) {
      if (animate) {
        gsap.to(canvasRef.current, {
          x,
          y,
          duration: spring ? 0.8 : 0.3,
          ease: spring ? "elastic.out(1, 0.5)" : "power2.out",
        });
      } else {
        gsap.to(canvasRef.current, {
          x,
          y,
          duration: 0.1,
          ease: "power1.out",
        });
      }
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).tagName === "IMG") return;
    
    // Kill any ongoing animations
    if (canvasRef.current) {
      gsap.killTweensOf(canvasRef.current);
    }
    
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - offsetRef.current.x,
      y: e.clientY - offsetRef.current.y,
    };
    lastPosRef.current = { x: e.clientX, y: e.clientY, time: Date.now() };
    velocityRef.current = { x: 0, y: 0 };
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const now = Date.now();
    const dt = now - lastPosRef.current.time;
    
    if (dt > 0) {
      velocityRef.current = {
        x: (e.clientX - lastPosRef.current.x) / dt,
        y: (e.clientY - lastPosRef.current.y) / dt,
      };
    }
    
    lastPosRef.current = { x: e.clientX, y: e.clientY, time: now };
    
    const newX = e.clientX - dragStartRef.current.x;
    const newY = e.clientY - dragStartRef.current.y;
    
    offsetRef.current = { x: newX, y: newY };
    updateCanvasPosition(newX, newY, false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Apply momentum/inertia effect
    const velocityMultiplier = 50;
    const finalX = offsetRef.current.x + velocityRef.current.x * velocityMultiplier;
    const finalY = offsetRef.current.y + velocityRef.current.y * velocityMultiplier;
    
    offsetRef.current = { x: finalX, y: finalY };
    
    if (canvasRef.current) {
      gsap.to(canvasRef.current, {
        x: finalX,
        y: finalY,
        duration: 1.2,
        ease: "power3.out",
      });
    }
  };


  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-black"
      />

      {/* Canvas content */}
      <div ref={canvasRef} className="absolute inset-0 will-change-transform">
        {images.map((image) => (
          <div
            key={image.id}
            className="absolute group pointer-events-none"
            style={{
              left: image.x,
              top: image.y,
              transform: "translate3d(0,0,0)",
            }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-[250px] h-[300px] object-cover pointer-events-none select-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Controls overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full text-white text-sm flex items-center gap-4 pointer-events-none">
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Drag</kbd>
          <span>to pan around</span>
        </div>
      </div>

      {/* Reset button */}
      <button
        onClick={() => {
          offsetRef.current = { x: 0, y: 0 };
          updateCanvasPosition(0, 0, true, true);
        }}
        className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm transition-colors"
      >
        Reset View
      </button>
    </div>
  );
};

export default InfiniteCanvas;