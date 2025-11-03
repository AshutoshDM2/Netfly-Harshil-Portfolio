
import { ArtWorkGalleryImages, } from "@/constants/ArtWorkData";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <div id="work" className="py-6">
      <h2 className="text-3xl md:text-6xl font-medium uppercase text-center">
        Work
      </h2>
      <div className="py-12 pb-6 columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {ArtWorkGalleryImages.map((image, index) => (
          <div key={index} className="break-inside-avoid mb-4 flex justify-center items-center">
            <Image
              src={image.src}
              alt={`Art Work ${index + 1}`}
              width={1000}
              height={1000}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
              className="w-80 sm:w-full sm:h-auto object-contain object-top rounded-sm hover:opacity-90 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link href="/gallery" className="bg-black text-white px-6 py-3 self-center cursor-pointer hover:bg-gray-800 transition-colors">
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Work;
