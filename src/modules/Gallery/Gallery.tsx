"use client";
import { GalleryCarousel } from "@/components/ui/skiper-ui/GallertCarousel";
import BreadCrumb from "@/common/BreadCrumb";
import Footer from "@/common/Footer/Footer";
import PageEntrance from "@/components/PageEntrance";
import {
  ArtPortfolioData,
  ArtPortfolioShort,
} from "@/constants/ArtPortfolioData";
import { GalleryParallex } from "@/components/ui/skiper-ui/GalleryParallex";

const Gallery = () => {
  return (
    <PageEntrance>
      <div className="w-full p-4">
        <BreadCrumb
          items={[{ href: "/", label: "Home" }, { label: "Gallery" }]}
        />
        <div className="lg:hidden mt-10 min-h-screen">
          <GalleryCarousel
            images={ArtPortfolioShort.map((item) => ({
              src: item.image,
              alt: item.title,
              slug: item.slug,
            }))}
          />
        </div>
        <div className="hidden lg:block">
          <GalleryParallex
            images={ArtPortfolioData.map((item) => ({
              src: item.image,
              alt: item.title,
              slug: item.slug,
              width: parseInt(item.dimensions?.split("x")[0] || "0"),
              height: parseInt(item.dimensions?.split("x")[1] || "0"),
              dimensions: item.dimensions || "0x0",
              medium: item.medium,
              year: item.year,
              title: item.title,
            }))}
          />
        </div>
      </div>
        <Footer />
    </PageEntrance>
  );
};

export default Gallery;
