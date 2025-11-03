import { generateMetadata } from "@/constants/MetaData";
import GalleryV2 from "@/modules/Gallery/GalleryV2";
import { Suspense } from "react";
import { getArtWorkDataPerYearFromCMS } from "@/constants/ArtWorkDataCMS";

export const metadata = generateMetadata('Gallery', '/gallery');

const GalleryPage = () => {
  // Fetch CMS data on the server
  const artworkData = getArtWorkDataPerYearFromCMS();
  
  return (
    <Suspense>
      <GalleryV2 artworkData={artworkData} />
    </Suspense>
  );
};

export default GalleryPage;
