// app/gallery/page.tsx

import { generateFileUrls, listObjects } from '@/lib/r2';
import { Gallery } from '../components/Gallery';
import { MediaItem } from '../interfaces/mediaItem';

// Define SEO Metadata
export const metadata = {
    title: 'Portfolio | Billy Weaver Photography & Videography',
    description:
        'Explore Billy Weaver’s gallery of stunning photography and videography. From adventure and editorial shoots to captivating music videos.',
    openGraph: {
        title: 'Portfolio | Billy Weaver Photography & Videography',
        description:
            'Discover the diverse portfolio of Billy Weaver, featuring breathtaking photography and dynamic videography, including adventure, editorial, and music themes.',
        url: 'https://billyweaver.co.uk/gallery',
        images: [
            {
                url: 'https://billyweaver.co.uk/images/billy.jpg',
                width: 1200,
                height: 800,
                alt: 'Billy Weaver Photography and Videography Gallery'
            }
        ],
        site_name: 'Billy Weaver'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@billyweaver',
        title: 'Gallery | Billy Weaver Photography & Videography',
        description:
            'Explore the diverse portfolio of Billy Weaver, showcasing professional photography and videography work across various genres.',
        images: ['https://billyweaver.co.uk/images/billy.jpg']
    },
    icons: {
        icon: '/favicon.ico'
    },
    robots: {
        index: true,
        follow: true
    }
};

const tags = ['Music', 'People', 'Adventure', 'Commercial', 'Video'];

async function fetchVideos() {
    const response = await fetch(process.env.VIMEO_API_URL as string, {
        headers: {
            Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`
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
        } as MediaItem;
    });

    return videoMediaItems;
}

const extractTagsFromPath = (path: string): string[] => {
    const pathParts = path.split('/');
    const tagsPart = pathParts[pathParts.length - 2];
    const parsedTags = tagsPart.split('&').map((tag) => tag.trim());

    // Only include tags that are in the hardcoded tags list
    return parsedTags.filter((tag) => tags.includes(tag));
};

async function fetchImages() {
    const objects = await listObjects('PHOTOS/PORTFOLIO');
    const fileUrls = generateFileUrls(objects);

    const imageMediaItems: MediaItem[] = fileUrls
        .map((fileUrl: string) => {
            const tags = extractTagsFromPath(fileUrl);
            return {
                type: 'image',
                src: fileUrl,
                tags
            } as MediaItem;
        })
        .sort((a: any, b: any) => {
            const aFileName = a.src.split('/').pop();
            const bFileName = b.src.split('/').pop();
            return bFileName!.localeCompare(aFileName!);
        });

    return imageMediaItems;
}

async function fetchMediaItems() {
    const imageMediaItems = await fetchImages();
    const videoMediaItems = await fetchVideos();
    const allMediaItems = [...imageMediaItems, ...videoMediaItems];
    return allMediaItems as MediaItem[];
}

export default async function GalleryPage() {
    const mediaItems = await fetchMediaItems();
    return (
        <div className="pt-[130px] mb-32 w-full">
            <Gallery mediaItems={mediaItems} tags={tags} />
        </div>
    );
}

export const revalidate = 86400; // (24 hours)
