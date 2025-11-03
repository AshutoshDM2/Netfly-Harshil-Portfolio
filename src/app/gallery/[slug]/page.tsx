import { generateMetadata as generateMetadataFunction } from "@/constants/MetaData";
import SingleGalleryV2 from "@/modules/SingleGallery/SingleGalleryV2";
import { getArtWorkDataPerYearFromCMS } from "@/constants/ArtWorkDataCMS";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return generateMetadataFunction(slug || "Untitled", `/gallery/${slug}`);
}

const GalleryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  
  // Fetch CMS data on the server
  const artworkData = getArtWorkDataPerYearFromCMS();
  
  return <SingleGalleryV2 slug={slug} artworkData={artworkData} />;
};

export default GalleryPage;
