import { generateMetadata as generateMetadataFunction } from "@/constants/MetaData";
import SingleGalleryV2 from "@/modules/SingleGallery/SingleGalleryV2";

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
  return <SingleGalleryV2 slug={slug} />;
};

export default GalleryPage;
