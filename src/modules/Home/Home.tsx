"use client";
import Section from "@/common/Section/Section";
import useSmoothScroll from "@/hooks/use-smoothScroll";
import Footer from "@/common/Footer/Footer";
import About from "./componentsV2/About";
import Work from "./componentsV2/Work";
import Contact from "./componentsV2/Contact";
import UpperFooter from "./componentsV2/UpperFooter";
import Navbar from "@/common/Navbar/Navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { ParallaxCarousel } from "./componentsV1/parallaxCarousel";
import {
  ArtWorkCaruselImagesDesktop,
  ArtWorkCaruselImagesMobile,
} from "@/constants/ArtWorkData";

export default function Home() {
  useSmoothScroll();
  const isMobile = useIsMobile();
  const imageUrl = isMobile
    ? ArtWorkCaruselImagesMobile
    : ArtWorkCaruselImagesDesktop;
  return (
    <>
      <ParallaxCarousel
        images={imageUrl}
        overlay
        overlayOpacity={0.2}
        height={{ xs: "80vh", sm: "80vh", md: "70vh" }}
        autoPlay
        autoPlayInterval={5000}
        parallax={false}
        fixedBackground={false}
        backgroundPosition="bottom"
        className="w-full"
      />
      <div className="relative z-10 bg-stone-100">
        <Section className="sm:py-12">
          <div className="min-h-screen ">
            <About />
            <Work />
            <Contact />
            <UpperFooter />
          </div>
        </Section>
        <Footer />
      </div>
    </>
  );
}
