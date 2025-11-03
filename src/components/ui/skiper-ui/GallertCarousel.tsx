/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";
import Link from "next/link";

const defaultImages = [
  {
    src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=950",
    alt: "Gallery Image 1",
    slug: "gallery-image-1",
  },
  {
    src: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=1200&h=950",
    alt: "Gallery Image 2",
    slug: "gallery-image-2",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=1200&h=950",
    alt: "Gallery Image 3",
    slug: "gallery-image-3",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=1200&h=950",
    alt: "Gallery Image 4",
    slug: "gallery-image-4",
  },
  {
    src: "https://images.unsplash.com/photo-1682687218147-9806132dc697?w=1200&h=950",
    alt: "Gallery Image 5",
    slug: "gallery-image-5",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?w=1200&h=950",
    alt: "Gallery Image 6",
    slug: "gallery-image-6",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220067-dced9a881b56?w=1200&h=950",
    alt: "Gallery Image 7",
    slug: "gallery-image-7",
  },
  {
    src: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=1200&h=950",
    alt: "Gallery Image 8",
    slug: "gallery-image-8",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=1200&h=950",
    alt: "Gallery Image 9",
    slug: "gallery-image-9",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220566-5599dbbebf11?w=1200&h=950",
    alt: "Gallery Image 10",
    slug: "gallery-image-10",
  },
  {
    src: "https://images.unsplash.com/photo-1682687221038-404cb8830901?w=1200&h=950",
    alt: "Gallery Image 11",
    slug: "gallery-image-11",
  },
];

interface Image {
  src: string;
  alt: string;
  slug: string;
}

const GalleryCarousel = ({ images = defaultImages }: { images?: Image[] }) => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Carousel_003 className="" images={images} showPagination loop />
    </div>
  );
};

export { GalleryCarousel };

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: Image[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 650px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 600px;
  }

  .swiper-pagination-bullet {
    background-color: #000 !important;
  }

`;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-7xl px-5", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 1500,
                  disableOnInteraction: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="">
              <Link href={`/gallery/${image.slug}`}>
                <img
                  className="h-full w-full object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </Link>
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };
