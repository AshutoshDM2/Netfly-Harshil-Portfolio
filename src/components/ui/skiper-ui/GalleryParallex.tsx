/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Image {
  src: string;
  slug: string;
  alt: string;
  width: number;
  height: number;
  dimensions: string;
  medium: string;
  year: number;
  title: string;
}

const GalleryParallex = ({ images }: { images: Image[] }) => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full text-black">
      <div
        ref={gallery}
        className="relative box-border flex justify-center h-[500vh] gap-12 overflow-hidden p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[6], images[7], images[8]]} y={y4} />
      </div>
    </main>
  );
};

type ColumnProps = {
  images: Image[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-6%] nth-2:top-[-6%] nth-3:top-[-4%] nth-4:top-[-7%]"
      style={{ y }}
    >
      {images.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          alt={image.alt}
          slug={image.slug}
          width={image.width}
          height={image.height}
          dimensions={image.dimensions}
          medium={image.medium}
          year={image.year}
          title={image.title}
        />
      ))}
      {images.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          alt={image.alt}
          slug={image.slug}
          width={image.width}
          height={image.height}
          dimensions={image.dimensions}
          medium={image.medium}
          year={image.year}
          title={image.title}
        />
      ))}
      {images.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          alt={image.alt}
          slug={image.slug}
          width={image.width}
          height={image.height}
          dimensions={image.dimensions}
          medium={image.medium}
          year={image.year}
          title={image.title}
        />
      ))}
      {images.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          alt={image.alt}
          slug={image.slug}
          width={image.width}
          height={image.height}
          dimensions={image.dimensions}
          medium={image.medium}
          year={image.year}
          title={image.title}
        />
      ))}
    </motion.div>
  );
};

export { GalleryParallex };

const Image = ({
  src,
  alt,
  slug,
  width,
  height,
  dimensions,
  medium,
  year,
  title,
}: Image) => {
  return (
    <Link
      href={`/gallery/${slug}`}
      className="relative h-full w-full overflow-hidden pb-2"
    >
      <img src={src} alt={alt} className="pointer-events-none object-cover" />
      <div className="text-black p-4 flex justify-between items-center">
        <div>
          <h3 className="text-sm line-clamp-1">{title}</h3>
          <p className="text-xs">{medium}</p>
        </div>
        <div>
          <p className="text-[8px] ">{year}</p>
          <p className="text-[8px] ">{dimensions}</p>
        </div>
      </div>
    </Link>
  );
};
