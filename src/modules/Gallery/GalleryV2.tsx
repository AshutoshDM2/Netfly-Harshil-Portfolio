"use client";
import BreadCrumb from "@/common/BreadCrumb";
import Section from "@/common/Section/Section";
import { ArtWorkDataPerYear } from "@/constants/ArtWorkData";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowBigLeftDash } from "lucide-react";
import Footer from "@/common/Footer/Footer";
import UpperFooter from "../Home/componentsV2/UpperFooter";
import Logo from "@/common/Logo/Logo";

const GalleryV2 = () => {
  return (
    <>
      <Section className="sm:py-12 ">
        <Logo />
        <h2 className="text-2xl md:text-5xl font-medium text-center px-4 relative pt-20 md:pt-0 mt-6 md:mt-10">
          Gallery
          <Link href="/">
            <button
              className="cursor-pointer absolute top-0 left-0 flex mt-1 items-center gap-1 bg-black text-white text-base font-medium px-4 py-2 rounded-full shadow-lg  hover:scale-102 transition-all duration-200 border border-white/20"
              style={{ zIndex: 10 }}
            >
              <ArrowBigLeftDash className="w-4 h-4" />
              Back to Home
            </button>
          </Link>
        </h2>
        <div className="flex flex-col gap-2 pt-10">
          {ArtWorkDataPerYear.map((data) => (
            <Link
              href={`/gallery/${data.slug}`}
              key={data.title}
              className={`w-full mx-auto overflow-hidden cursor-pointer `}
            >
              <motion.div
                className="h-32 md:h-28 w-full flex items-center justify-center relative"
                whileHover={{ height: "320px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-3xl md:text-2xl font-bold text-white">
                    {data.title}
                  </h2>
                </div>

                <motion.div className="w-full h-full relative overflow-hidden rounded-[30px]">
                  <div className="absolute z-30 inset-0 bg-black opacity-20" />
                  <Image
                    src={data.galleryImages.src}
                    alt={data.title}
                    fill
                    className="object-cover object-center"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                  />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
        <UpperFooter />
      </Section>
      <Footer />
    </>
  );
};

export default GalleryV2;
