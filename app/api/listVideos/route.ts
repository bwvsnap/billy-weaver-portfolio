import { NextResponse } from 'next/server';

const VIMEO_API_URL = 'https://api.vimeo.com/me/videos';
const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN; // Use environment variable for security

export async function GET(request: Request) {
    if (!VIMEO_ACCESS_TOKEN) {
        return NextResponse.json(
            {
                error: 'VIMEO_ACCESS_TOKEN is not defined in environment variables'
            },
            { status: 500 }
        );
    }

    try {
        const response = await fetch(VIMEO_API_URL, {
            headers: {
                Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch Vimeo videos');
        }

        const vimeoData = await response.json();
        const vimeoVideos = vimeoData.data;

        const videoMediaItems = vimeoVideos.map((video: any) => {
            const videoId = video.uri.split('/').pop();
            const thumbnailUrl =
                video.pictures.sizes[video.pictures.sizes.length - 1].link; // Fetch the highest resolution thumbnail
            return {
                type: 'video',
                src: videoId,
                tags: ['Video'],
                thumbnail: thumbnailUrl
            };
        });

        return NextResponse.json(videoMediaItems, { status: 200 });
    } catch (error) {
        console.error('Error fetching Vimeo videos: ', error);
        return NextResponse.json(
            { error: 'Failed to fetch Vimeo videos' },
            { status: 500 }
        );
    }
}
