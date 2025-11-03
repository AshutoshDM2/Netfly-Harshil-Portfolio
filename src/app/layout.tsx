import type { Metadata, Viewport } from "next";
import {
  Ubuntu,
  Raleway,
  Playfair_Display,
  Montserrat,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import siteUrl from "@/constants/site";
import { PageTransitionProvider } from "@/context/PageTransitionContext";
import Navbar from "@/common/Navbar/Navbar";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const priestacy = localFont({
  src: "../../public/font/Priestacy.otf",
  variable: "--font-priestacy",
});

const mileastItalic = localFont({
  src: "../../public/font/Mileast Italic.otf",
  variable: "--font-mileast-italic",
});
export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}`),
  title: "Harshil Bhatia - Handmade Creative Artwork & Art Portfolio",
  description:
    "Explore the creative portfolio of Harshil Bhatia featuring handmade artwork, and artistic creations. Discover original art pieces and creative gallery.",
  keywords:
    "Harshil Bhatia, art portfolio, handmade artwork, creative art, artist portfolio, original artwork, creative gallery, artistic designs",
  authors: [{ name: "Harshil Bhatia" }],
  creator: "Harshil Bhatia",
  publisher: "Harshil Bhatia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  openGraph: {
    url: siteUrl,
    type: "website",
    title: "Harshil Bhatia - Handmade Creative Artwork",
    description:
      "Explore the creative portfolio of Harshil Bhatia featuring handmade artwork, unique designs, and artistic creations.",
    siteName: "Harshil Bhatia Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Harshil Bhatia Art Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@harshilbhatia",
    creator: "@harshilbhatia",
    title: "Harshil Bhatia - Handmade Creative Artwork",
    description:
      "Explore the creative portfolio of Harshil Bhatia featuring handmade artwork, unique designs, and artistic creations.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-IN": siteUrl,
      en: siteUrl,
      "x-default": siteUrl,
    },
  },
  category: "Arts & Entertainment",
  classification: "Art Portfolio & Gallery",
};

// Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Harshil Bhatia",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: siteUrl,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${priestacy.variable} ${mileastItalic.variable} ${montserrat.variable} ${ubuntu.variable} ${raleway.variable} ${playfairDisplay.variable} antialiased bg-stone-200`}
      >
        <PageTransitionProvider>
          <Navbar />
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
