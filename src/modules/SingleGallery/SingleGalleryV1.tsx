"use client";

import { ArtPortfolioData } from "@/constants/ArtPortfolioData";
import BreadCrumb from "@/common/BreadCrumb";
import { notFound } from "next/navigation";
import Section from "@/common/Section/Section";
import Footer from "@/common/Footer/Footer";
import Image from "next/image";
import { useState } from "react";
import PhotoViewer from "@/common/PhotoViewer/PhotoViewer";

const SingleGalleryV1 = ({ slug }: { slug: string }) => {
  const artwork = ArtPortfolioData.find((art) => art.slug === slug);  
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  console.log(selectedImage);
  if (!artwork) {
    notFound();
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4 md:pt-8">
          <BreadCrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/gallery", label: "Gallery" },
              { label: artwork.title || "Untitled" },
            ]}
          />
        </div>

        <Section>
          <div className="container mx-auto px-4 py-8">
            {/* Pinterest-style Masonry Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {ArtPortfolioData.map((art, index) => (
                <div
                  key={art.slug}
                  className="break-inside-avoid mb-4 group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100">
                    <Image
                      src={art.image}
                      alt={art.title || "Untitled"}
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {art.title || "Untitled"}
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        {art.medium}
                      </p>
                      <p className="text-white text-xs opacity-80 mt-1">
                        {art.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 z-50"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="max-w-6xl w-full max-h-[90vh] overflow-auto">
              <div className="relative">
                <Image
                  src={ArtPortfolioData[selectedImage].image}
                  alt={ArtPortfolioData[selectedImage].title || "Untitled"}
                  width={1200}
                  height={1600}
                  className="w-full h-auto"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="bg-white p-6 mt-4 rounded-lg">
                  <h2 className="text-2xl font-bold mb-2">
                    {ArtPortfolioData[selectedImage].title || "Untitled"}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    {ArtPortfolioData[selectedImage].medium}
                  </p>
                  {ArtPortfolioData[selectedImage].dimensions && (
                    <p className="text-gray-600 mb-1">
                      {ArtPortfolioData[selectedImage].dimensions}
                    </p>
                  )}
                  <p className="text-gray-500 mb-4">
                    {ArtPortfolioData[selectedImage].year}
                  </p>
                  {ArtPortfolioData[selectedImage].descMain && (
                    <p className="text-gray-700 whitespace-pre-line mb-4">
                      {ArtPortfolioData[selectedImage].descMain}
                    </p>
                  )}
                  {ArtPortfolioData[selectedImage].secondDesc && (
                    <p className="text-gray-700 whitespace-pre-line">
                      {ArtPortfolioData[selectedImage].secondDesc}
                    </p>
                  )}
                </div>
              </div>
              {/* Navigation buttons */}
              <div className="flex justify-between mt-4">
                <button
                  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(Math.max(0, selectedImage - 1));
                  }}
                  disabled={selectedImage === 0}
                >
                  ← Previous
                </button>
                <button
                  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      Math.min(ArtPortfolioData.length - 1, selectedImage + 1)
                    );
                  }}
                  disabled={selectedImage === ArtPortfolioData.length - 1}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      
    </>
  );
};

export default SingleGalleryV1;
