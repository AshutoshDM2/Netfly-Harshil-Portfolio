import { generateMetadata } from "@/constants/MetaData";
import GalleryV2 from "@/modules/Gallery/GalleryV2";
import { Suspense } from "react";

export const metadata = generateMetadata('Gallery', '/gallery');

const GalleryPage = () => {
  return (
    <Suspense>
      <GalleryV2 />
    </Suspense>
  );
};

export default GalleryPage;
