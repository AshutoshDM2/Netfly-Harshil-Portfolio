"use client";
import BreadCrumb from "@/common/BreadCrumb";
import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/common/Section/Section";
import Footer from "@/common/Footer/Footer";
import { ArtWorkDataPerYear } from "@/constants/ArtWorkData";
import { useState } from "react";
import PhotoViewer from "@/common/PhotoViewer/PhotoViewer";
import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";
import { cn } from "@/lib/utils";

const SingleGalleryV2 = ({ slug }: { slug: string }) => {
  const yearCollection = ArtWorkDataPerYear.find((art) => art.slug === slug);
  const [photoViewerOpen, setPhotoViewerOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState<
    Array<{ src: string; alt?: string; medium?: string; dimensions?: string }>
  >([]);

  if (!yearCollection) {
    notFound();
  }
  const MasonryClassName = (slug === "2024" || slug === "2025") ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "columns-1 md:columns-2 lg:columns-3";
  const ImageClassName = (slug === "2024" || slug === "2025") ? "" : "break-inside-avoid";

  return (
    <>
      <div className="min-h-screen">
        <Section>
          <BreadCrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/gallery", label: "Gallery" },
              { label: yearCollection.title },
            ]}
          />

          <div className="flex flex-col gap-8 md:gap-12">
            {/* Year Title */}
            <h1 className="text-2xl md:text-5xl font-medium text-center px-4 relative pt-20 md:pt-0 mt-6 md:mt-10">
              <Link href="/gallery">
                <button
                  className="cursor-pointer absolute top-0 left-0 flex mt-1 items-center gap-1 bg-black text-white text-base font-medium px-4 py-2 rounded-full shadow-lg  hover:scale-102 transition-all duration-200 border border-white/20"
                  style={{ zIndex: 10 }}
                >
                  <ArrowBigLeftDash className="w-4 h-4" />
                  Back to Gallery
                </button>
              </Link>
              {yearCollection.title} Collection
            </h1>

            {/* Pinterest-style Masonry Grid */}
            <div className={cn(MasonryClassName, "gap-6 md:gap-8 px-4 space-y-6 md:space-y-8")}>
              {yearCollection.images.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className={cn(ImageClassName, "mb-6 md:mb-8 cursor-pointer")}
                  onClick={() => {
                    setPhotoViewerOpen(true);
                    setCurrentPhotoIndex(index);
                    setCurrentPhotos(
                      yearCollection.images.map((image) => ({
                        src: image.ImageURLThumbnail,
                        alt: image.title,
                        medium: image.medium,
                        dimensions: image.dimensions,
                      }))
                    );
                  }}
                >
                  <div className="flex flex-col gap-3 group">
                    {/* Image */}
                    <div className="relative w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={artwork.ImageURLThumbnail || artwork.ImageURL}
                        alt={artwork.title || "Artwork"}
                        width={800}
                        height={1000}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
                        className="w-full h-auto object-cover group-hover:opacity-95 transition-transform duration-300"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-2 px-1">
                      {artwork.title && (
                        <h2 className="text-base md:text-lg font-semibold text-gray-900">
                          {artwork.title}
                        </h2>
                      )}

                      <div className="space-y-1 text-xs md:text-sm text-gray-600">
                        {artwork.dimensions && (
                          <p>
                            <span className="font-medium text-gray-800">
                              Dimensions:
                            </span>{" "}
                            {artwork.dimensions}
                          </p>
                        )}
                        {artwork.medium && (
                          <p>
                            <span className="font-medium text-gray-800">
                              Medium:
                            </span>{" "}
                            {artwork.medium}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
      <Footer />
      {photoViewerOpen && (
        <PhotoViewer
          photos={currentPhotos}
          initialIndex={currentPhotoIndex}
          onClose={() => setPhotoViewerOpen(false)}
        />
      )}
    </>
  );
};

export default SingleGalleryV2;
