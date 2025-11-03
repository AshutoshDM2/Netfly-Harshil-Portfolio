import { NextResponse } from 'next/server';
import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';

/**
 * API Route to get all artwork data
 * This can be used by client components that need the data
 * 
 * Usage:
 * const response = await fetch('/api/artwork');
 * const data = await response.json();
 */
export async function GET() {
  try {
    const artworkData = getArtWorkDataPerYearFromCMS();
    return NextResponse.json(artworkData);
  } catch (error) {
    console.error('Error fetching artwork data:', error);
    return NextResponse.json(
      { error: 'Failed to load artwork data' },
      { status: 500 }
    );
  }
}

