# Usage Examples - Netlify CMS Integration

## Example 1: Display All Artwork (Server Component)

```tsx
// app/gallery/page.tsx
import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';

export default function GalleryPage() {
  const artworkCollections = getArtWorkDataPerYearFromCMS();
  
  return (
    <div className="gallery">
      {artworkCollections.map((collection) => (
        <section key={collection.slug} className="year-section">
          <h2>{collection.title}</h2>
          <div className="artwork-grid">
            {collection.images.map((artwork) => (
              <div key={artwork.id} className="artwork-card">
                <img 
                  src={artwork.ImageURL} 
                  alt={artwork.title}
                  loading="lazy"
                />
                <h3>{artwork.title}</h3>
                <p>{artwork.dimensions}</p>
                <p>{artwork.medium}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
```

## Example 2: Display Specific Year (Server Component)

```tsx
// app/gallery/[slug]/page.tsx
import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';
import { notFound } from 'next/navigation';

export default function YearPage({ params }: { params: { slug: string } }) {
  const artworkCollections = getArtWorkDataPerYearFromCMS();
  const collection = artworkCollections.find(c => c.slug === params.slug);
  
  if (!collection) {
    notFound();
  }
  
  return (
    <div>
      <h1>{collection.title} Collection</h1>
      <div className="artwork-list">
        {collection.images.map((artwork) => (
          <article key={artwork.id}>
            <img src={artwork.ImageURL} alt={artwork.title} />
            <h2>{artwork.title}</h2>
            <dl>
              <dt>Dimensions:</dt>
              <dd>{artwork.dimensions}</dd>
              <dt>Medium:</dt>
              <dd>{artwork.medium}</dd>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

// Generate static paths for all years
export async function generateStaticParams() {
  const artworkCollections = getArtWorkDataPerYearFromCMS();
  return artworkCollections.map((collection) => ({
    slug: collection.slug,
  }));
}
```

## Example 3: Client Component with API Route

```tsx
'use client';

import { useEffect, useState } from 'react';

interface Artwork {
  id: number;
  title: string;
  dimensions: string;
  medium: string;
  ImageURL: string;
  ImageURLThumbnail: string;
}

interface Collection {
  year: string;
  slug: string;
  images: Artwork[];
}

export default function ClientGallery() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/artwork')
      .then(res => res.json())
      .then(data => {
        setCollections(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading artwork:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {collections.map((collection) => (
        <div key={collection.slug}>
          <h2>{collection.year}</h2>
          {collection.images.map((artwork) => (
            <div key={artwork.id}>
              <img 
                src={artwork.ImageURLThumbnail} 
                alt={artwork.title} 
              />
              <p>{artwork.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
```

## Example 4: Get Latest Artworks (Featured Section)

```tsx
// components/FeaturedArtwork.tsx
import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';

export default function FeaturedArtwork() {
  const artworkCollections = getArtWorkDataPerYearFromCMS();
  
  // Get the latest year
  const latestCollection = artworkCollections[artworkCollections.length - 1];
  
  // Get first 3 artworks from latest year
  const featured = latestCollection?.images.slice(0, 3) || [];
  
  return (
    <section className="featured">
      <h2>Latest Artwork from {latestCollection?.title}</h2>
      <div className="featured-grid">
        {featured.map((artwork) => (
          <div key={artwork.id} className="featured-item">
            <img 
              src={artwork.ImageURL} 
              alt={artwork.title}
            />
            <h3>{artwork.title}</h3>
            <p>{artwork.medium}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

## Example 5: Search/Filter Artworks

```tsx
'use client';

import { useState } from 'react';
import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';

interface SearchableGalleryProps {
  initialData: ReturnType<typeof getArtWorkDataPerYearFromCMS>;
}

export default function SearchableGallery({ initialData }: SearchableGalleryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedium, setSelectedMedium] = useState('all');
  
  // Flatten all artworks
  const allArtworks = initialData.flatMap(collection => 
    collection.images.map(artwork => ({
      ...artwork,
      year: collection.title
    }))
  );
  
  // Get unique mediums
  const mediums = ['all', ...new Set(allArtworks.map(a => a.medium))];
  
  // Filter artworks
  const filteredArtworks = allArtworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMedium = selectedMedium === 'all' || artwork.medium === selectedMedium;
    return matchesSearch && matchesMedium;
  });
  
  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Search artworks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          value={selectedMedium} 
          onChange={(e) => setSelectedMedium(e.target.value)}
        >
          {mediums.map(medium => (
            <option key={medium} value={medium}>
              {medium}
            </option>
          ))}
        </select>
      </div>
      
      <div className="results">
        <p>{filteredArtworks.length} artworks found</p>
        <div className="artwork-grid">
          {filteredArtworks.map((artwork) => (
            <div key={`${artwork.year}-${artwork.id}`}>
              <img src={artwork.ImageURL} alt={artwork.title} />
              <h3>{artwork.title}</h3>
              <p>{artwork.year} • {artwork.medium}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Parent Server Component
import SearchableGallery from './SearchableGallery';

export default function GalleryPage() {
  const artworkData = getArtWorkDataPerYearFromCMS();
  
  return (
    <div>
      <h1>Gallery</h1>
      <SearchableGallery initialData={artworkData} />
    </div>
  );
}
```

## Example 6: Artwork Detail Page

```tsx
// app/artwork/[year]/[id]/page.tsx
import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    year: string;
    id: string;
  };
}

export default function ArtworkDetailPage({ params }: Props) {
  const artworkCollections = getArtWorkDataPerYearFromCMS();
  const collection = artworkCollections.find(c => c.slug === params.year);
  const artwork = collection?.images.find(a => a.id === parseInt(params.id));
  
  if (!artwork) {
    notFound();
  }
  
  // Get next and previous artworks
  const currentIndex = collection!.images.indexOf(artwork);
  const nextArtwork = collection!.images[currentIndex + 1];
  const prevArtwork = collection!.images[currentIndex - 1];
  
  return (
    <div className="artwork-detail">
      <div className="artwork-image">
        <img src={artwork.ImageURL} alt={artwork.title} />
      </div>
      
      <div className="artwork-info">
        <h1>{artwork.title}</h1>
        <p className="year">{collection!.title}</p>
        
        <dl>
          <dt>Dimensions:</dt>
          <dd>{artwork.dimensions}</dd>
          
          <dt>Medium:</dt>
          <dd>{artwork.medium}</dd>
        </dl>
        
        <div className="navigation">
          {prevArtwork && (
            <a href={`/artwork/${params.year}/${prevArtwork.id}`}>
              ← Previous
            </a>
          )}
          {nextArtwork && (
            <a href={`/artwork/${params.year}/${nextArtwork.id}`}>
              Next →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Generate all artwork detail pages
export async function generateStaticParams() {
  const artworkCollections = getArtWorkDataPerYearFromCMS();
  
  const params = [];
  for (const collection of artworkCollections) {
    for (const artwork of collection.images) {
      params.push({
        year: collection.slug,
        id: artwork.id.toString(),
      });
    }
  }
  
  return params;
}
```

## Example 7: Image Gallery with Lightbox

```tsx
'use client';

import { useState } from 'react';

interface Artwork {
  id: number;
  title: string;
  ImageURL: string;
  ImageURLThumbnail: string;
  medium: string;
  dimensions: string;
}

interface ImageGalleryProps {
  artworks: Artwork[];
}

export default function ImageGallery({ artworks }: ImageGalleryProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  
  return (
    <>
      <div className="thumbnail-grid">
        {artworks.map((artwork) => (
          <button
            key={artwork.id}
            onClick={() => setSelectedArtwork(artwork)}
            className="thumbnail"
          >
            <img 
              src={artwork.ImageURLThumbnail} 
              alt={artwork.title}
              loading="lazy"
            />
          </button>
        ))}
      </div>
      
      {/* Lightbox Modal */}
      {selectedArtwork && (
        <div 
          className="lightbox"
          onClick={() => setSelectedArtwork(null)}
        >
          <div className="lightbox-content">
            <img 
              src={selectedArtwork.ImageURL} 
              alt={selectedArtwork.title}
            />
            <div className="lightbox-info">
              <h3>{selectedArtwork.title}</h3>
              <p>{selectedArtwork.dimensions} • {selectedArtwork.medium}</p>
            </div>
            <button 
              className="close-button"
              onClick={() => setSelectedArtwork(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
```

## Example 8: Statistics Dashboard

```tsx
// app/admin/stats/page.tsx
import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';

export default function StatsPage() {
  const artworkCollections = getArtWorkDataPerYearFromCMS();
  
  // Calculate statistics
  const totalArtworks = artworkCollections.reduce(
    (sum, collection) => sum + collection.images.length, 
    0
  );
  
  const mediumCounts = artworkCollections
    .flatMap(c => c.images)
    .reduce((acc, artwork) => {
      acc[artwork.medium] = (acc[artwork.medium] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
  const yearCounts = artworkCollections.map(collection => ({
    year: collection.title,
    count: collection.images.length
  }));
  
  return (
    <div className="stats-dashboard">
      <h1>Artwork Statistics</h1>
      
      <div className="stat-card">
        <h2>Total Artworks</h2>
        <p className="big-number">{totalArtworks}</p>
      </div>
      
      <div className="stat-card">
        <h2>Artworks by Year</h2>
        <ul>
          {yearCounts.map(({ year, count }) => (
            <li key={year}>
              {year}: <strong>{count}</strong> artworks
            </li>
          ))}
        </ul>
      </div>
      
      <div className="stat-card">
        <h2>Artworks by Medium</h2>
        <ul>
          {Object.entries(mediumCounts)
            .sort(([, a], [, b]) => b - a)
            .map(([medium, count]) => (
              <li key={medium}>
                {medium}: <strong>{count}</strong>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
```

## Data Structure Reference

```typescript
// Type definitions for CMS data
interface Artwork {
  id: number;
  title: string;
  dimensions: string;
  medium: string;
  ImageURL: string;           // Optimized Cloudinary URL
  ImageURLThumbnail: string;  // Thumbnail version
}

interface ArtworkCollection {
  title: string;        // e.g., "2025"
  slug: string;         // e.g., "2025"
  galleryImages?: any;  // Static gallery image
  images: Artwork[];    // Array of artworks
}

// Function return type
type ArtworkData = ArtworkCollection[];
```

## Tips for Best Performance

1. **Use Server Components when possible** - They're faster and don't increase bundle size
2. **Lazy load images** - Use `loading="lazy"` on img tags
3. **Use thumbnails for grids** - Use `ImageURLThumbnail` for gallery views
4. **Cache API responses** - Next.js caches by default, but you can customize
5. **Generate static pages** - Use `generateStaticParams` for better performance

