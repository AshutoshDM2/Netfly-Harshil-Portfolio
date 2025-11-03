import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { optimizeCloudinaryUrl, optimizeCloudinaryThumbnail } from './cloudinary';

export interface Artwork {
  id: number;
  title: string;
  dimensions: string;
  medium: string;
  imageURL: string;
  thumbnailURL?: string;
}

export interface ArtworkCollection {
  year: string;
  slug: string;
  galleryImage?: string;
  artworks: Artwork[];
}

const contentDirectory = path.join(process.cwd(), 'content/artwork');

export function getAllArtworkCollections(): ArtworkCollection[] {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    console.warn('Content directory does not exist:', contentDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const collections = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      // Process artworks to add optimized URLs if they have imageURL
      const artworks = (data.artworks || []).map((artwork: Artwork) => ({
        ...artwork,
        ImageURL: artwork.imageURL ? optimizeCloudinaryUrl(artwork.imageURL) : '',
        ImageURLThumbnail: artwork.thumbnailURL 
          ? optimizeCloudinaryThumbnail(artwork.thumbnailURL, 600)
          : artwork.imageURL 
          ? optimizeCloudinaryThumbnail(artwork.imageURL, 600)
          : '',
      }));

      return {
        year: data.year,
        slug: data.slug,
        galleryImage: data.galleryImage || '',
        artworks,
      };
    })
    .sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return collections;
}

export function getArtworkCollectionBySlug(slug: string): ArtworkCollection | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    const artworks = (data.artworks || []).map((artwork: Artwork) => ({
      ...artwork,
      ImageURL: artwork.imageURL ? optimizeCloudinaryUrl(artwork.imageURL) : '',
      ImageURLThumbnail: artwork.thumbnailURL 
        ? optimizeCloudinaryThumbnail(artwork.thumbnailURL, 600)
        : artwork.imageURL 
        ? optimizeCloudinaryThumbnail(artwork.imageURL, 600)
        : '',
    }));

    return {
      year: data.year,
      slug: data.slug,
      galleryImage: data.galleryImage || '',
      artworks,
    };
  } catch (error) {
    console.error(`Error loading artwork collection ${slug}:`, error);
    return null;
  }
}

