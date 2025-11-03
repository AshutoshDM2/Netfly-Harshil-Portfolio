/**
 * Optimizes Cloudinary image URLs with compression and transformations
 * 
 * Transformations applied:
 * - q_auto: Automatic quality optimization
 * - f_auto: Automatic format selection (WebP, AVIF when supported)
 * - c_limit: Limits dimensions to specified width without upscaling
 * - dpr_auto: Automatic device pixel ratio adjustment
 * 
 * @param url - Original Cloudinary URL
 * @param width - Maximum width (default: 2048 for high quality display)
 * @returns Optimized Cloudinary URL
 */
export function optimizeCloudinaryUrl(url: string, width: number = 2048): string {
    if (!url.includes('res.cloudinary.com')) {
        return url;
    }

    // Parse the Cloudinary URL
    const uploadIndex = url.indexOf('/upload/');
    if (uploadIndex === -1) {
        return url;
    }

    // Insert transformations after /upload/
    const baseUrl = url.substring(0, uploadIndex + 8); // includes '/upload/'
    const imagePath = url.substring(uploadIndex + 8);

    // Cloudinary transformations for optimal compression and quality
    const transformations = [
        'q_auto:good',           // Automatic quality (good balance)
        'f_auto',                // Automatic format (WebP/AVIF when supported)
        `c_limit,w_${width}`,    // Limit width without upscaling
        'dpr_auto'               // Auto device pixel ratio
    ].join(',');

    return `${baseUrl}${transformations}/${imagePath}`;
}

/**
 * Optimizes Cloudinary URL for thumbnail/preview images
 * Uses more aggressive compression for smaller previews
 */
export function optimizeCloudinaryThumbnail(url: string, width: number = 800): string {
    if (!url.includes('res.cloudinary.com')) {
        return url;
    }

    const uploadIndex = url.indexOf('/upload/');
    if (uploadIndex === -1) {
        return url;
    }

    const baseUrl = url.substring(0, uploadIndex + 8);
    const imagePath = url.substring(uploadIndex + 8);

    // More aggressive compression for thumbnails
    const transformations = [
        'q_auto:eco',            // Lower quality for thumbnails
        'f_auto',
        `c_limit,w_${width}`,
        'dpr_auto'
    ].join(',');

    return `${baseUrl}${transformations}/${imagePath}`;
}

