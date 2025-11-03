/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArtWork2022, ArtWork2023, ArtWork2024, ArtWork2025, GalleryImages } from "../../assets/import";
import { getAllArtworkCollections } from "@/lib/content";

/**
 * This file bridges the CMS content with the existing application structure.
 * It reads from markdown files managed by Netlify CMS and transforms them
 * into the format expected by the rest of the application.
 * 
 * To use CMS-managed content, import from this file instead of ArtWorkData.tsx
 */

// Server-side function to get artwork data from CMS
export function getArtWorkDataPerYearFromCMS() {
  const collections = getAllArtworkCollections();
  
  // Map CMS data to the existing format with gallery images
  const galleryImageMap: { [key: string]: any } = {
    '2022': GalleryImages.Image1,
    '2023': GalleryImages.Image2,
    '2024': GalleryImages.Image3,
    '2025': GalleryImages.Image4,
  };

  // Map local image imports (for backward compatibility)
  const localImageMap: { [key: string]: any } = {
    '2022': ArtWork2022,
    '2023': ArtWork2023,
    '2024': ArtWork2024,
    '2025': ArtWork2025,
  };

  return collections.map((collection) => ({
    title: collection.year,
    slug: collection.slug,
    galleryImages: galleryImageMap[collection.year] || GalleryImages.Image1,
    images: collection.artworks.map((artwork: any) => ({
      id: artwork.id,
      title: artwork.title,
      dimensions: artwork.dimensions,
      medium: artwork.medium,
      // Use local image if available, otherwise use Cloudinary URL
      image: localImageMap[collection.year]?.[artwork.title.replace(/[^a-zA-Z0-9]/g, '_')] || undefined,
      ImageURL: artwork.ImageURL,
      ImageURLThumbnail: artwork.ImageURLThumbnail,
    })),
  }));
}

/**
 * Use this in client components or pages that need static data
 * For server components, use getArtWorkDataPerYearFromCMS() directly
 */
export async function getStaticArtworkData() {
  try {
    return getArtWorkDataPerYearFromCMS();
  } catch (error) {
    console.error('Error loading CMS artwork data:', error);
    // Fallback to empty array if CMS data unavailable
    return [];
  }
}

