import { Metadata } from 'next';
import siteUrl from './site';

export async function generateMetadata(
  pageName: string,
  route: string,
  description?: string
): Promise<Metadata> {
  const canonicalUrl = `${siteUrl}${route ? `/${route}` : ''}`;
  const defaultDescription = 'Explore the creative portfolio of Harshil Bhatia featuring handmade artwork, and artistic creations. Discover original art pieces and creative gallery.';
  
  return {
    title: `${pageName} | Harshil Bhatia - Art Portfolio`,
    description: description || defaultDescription,
    keywords: [
      'Harshil Bhatia',
      'art portfolio',
      'handmade artwork',
      'creative art',
      'artist portfolio',
      'original artwork',
      'creative gallery',
      'artistic designs',
      `${pageName}`,
      'charcoal art',
      'oil painting',
      'acrylic painting',
      'contemporary art',
      'fine art',
      'visual arts',
      'Indian artist',
      'art exhibition',
    ],
    authors: [{ name: 'Harshil Bhatia' }],
    creator: 'Harshil Bhatia',
    publisher: 'Harshil Bhatia',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.webp", sizes: "32x32", type: "image/png" },
        { url: "/favicon.webp", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/favicon.webp", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.webp",
    },
    metadataBase: new URL(siteUrl),
    openGraph: {
      url: canonicalUrl,
      type: 'website',
      title: `${pageName} | Harshil Bhatia - Handmade Creative Artwork`,
      description: description || defaultDescription,
      siteName: 'Harshil Bhatia Portfolio',
      locale: 'en_US',
      images: [
        {
          url: '/og-image.webp',
          width: 1200,
          height: 630,
          alt: `${pageName} | Harshil Bhatia Art Portfolio`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@harshilbhatia',
      creator: '@harshilbhatia',
      title: `${pageName} | Harshil Bhatia - Handmade Creative Artwork`,
      description: description || defaultDescription,
      images: ['/og-image.webp'],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-IN': canonicalUrl,
        en: canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    category: 'Arts & Entertainment',
    classification: 'Art Portfolio & Gallery',
    other: {
      'application-name': 'Harshil Bhatia Portfolio',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
    },
  };
}
