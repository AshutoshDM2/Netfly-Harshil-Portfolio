/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useCallback, useState } from "react";
import { X, Loader2 } from "lucide-react";

export interface Photo {
    src: string;
    alt?: string;
    title?: string;
    medium?: string;
    dimensions?: string;
}

interface PhotoViewerProps {
    photos: Photo[];
    initialIndex?: number;
    onClose: () => void;
}

// Global cache to track loaded images across component instances
const imageCache = new Set<string>();

const PhotoViewer: React.FC<PhotoViewerProps> = ({
    photos,
    initialIndex = 0,
    onClose,
}) => {
    // Only show the clicked image
    const currentPhoto = photos[initialIndex];
    
    // Check if image is already cached, if so don't show loader
    const isImageCached = imageCache.has(currentPhoto.src);
    const [isLoading, setIsLoading] = useState(!isImageCached);
    const [currentSrc, setCurrentSrc] = useState(currentPhoto.src);

    // Keyboard navigation
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    // Update loading state when source changes
    if (currentPhoto.src !== currentSrc) {
        setCurrentSrc(currentPhoto.src);
        const isCached = imageCache.has(currentPhoto.src);
        setIsLoading(!isCached);
    }

    // Handle image load completion
    const handleImageLoad = () => {
        imageCache.add(currentPhoto.src);
        setIsLoading(false);
    };

    if (!currentPhoto) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-90"
            style={{ backdropFilter: "blur(10px)" }}
        >
            {/* Close Button */}
            <button
                className="absolute top-4 left-4 text-white md:text-black text-lg px-3 py-2 rounded hover:text-white hover:bg-black/20 transition cursor-pointer"
                onClick={onClose}
                aria-label="Close"
            >
                <X className="w-6 h-6" />
                <span className="sr-only">Close</span>
            </button>

            {/* Loader */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-12 h-12 text-white animate-spin" />
                </div>
            )}

            {/* Main Image */}
            <div className="w-fit h-fit  flex flex-col md:flex-row justify-center items-center bg-white">
                <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt || "Untitled"}
                    className="h-fit md:h-full max-h-[80vh] w-fit md:max-w-5xl object-contain bg-white"
                    onLoad={handleImageLoad}
                    onError={() => setIsLoading(false)}
                    style={{ display: isLoading ? "none" : "block" }}
                />
                <div 
                    className="flex flex-col justify-center items-center max-w-48 w-full md:w-fit text-center h-full py-4 min-h-full"
                    style={{ display: isLoading ? "none" : "flex" }}
                >
                    <span className="text-xl font-medium px-2 py-1 ">
                        {currentPhoto.alt || "Untitled"}
                    </span>
                    {currentPhoto.medium && (
                        <span className="text-xs md:text-sm font-medium px-2 py-1 ">
                            Medium: {currentPhoto.medium}
                        </span>
                    )}
                    {currentPhoto.dimensions && (
                        <span className="text-xs md:text-sm font-medium px-2 py-1 ">
                            Dimensions: {currentPhoto.dimensions}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhotoViewer;