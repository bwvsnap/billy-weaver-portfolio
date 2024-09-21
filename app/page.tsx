import FeaturedWork from './components/Sections/FeaturedWork';
import Intro from './components/Sections/Intro';
import Hero from './components/Sections/Hero';
import HeroBackground from './components/Sections/HeroBackground';
import { Services } from './components/Sections/Services';
import { generateFileUrls, listObjects } from '@/lib/r2';
import { MediaItem } from './interfaces/mediaItem';

// Metadata for SEO
export const metadata = {
    title: 'Billy Weaver | Photographer & Videographer in Manchester',
    description:
        'Documentary-style photographer and videographer based in Manchester UK, blending classic techniques with experimentation to bring ideas and stories to life through compelling visual imagery.',
    openGraph: {
        title: 'Billy Weaver | Photographer & Videographer in Manchester, UK',
        description:
            'Documentary-style photographer and videographer based in Manchester UK, blending classic techniques with experimentation to bring ideas and stories to life through compelling visual imagery.',
        url: 'https://billyweaver.co.uk',
        images: [
            {
                url: 'https://billyweaver.co.uk/images/billy.jpg',
                width: 700,
                height: 1000,
                alt: 'Billy Weaver Photography Portfolio'
            }
        ],
        site_name: 'Billy Weaver'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@billyweaver',
        title: 'Billy Weaver | Photographer & Videographer in Manchester, UK',
        description:
            'Documentary-style photographer and videographer based in Manchester UK, blending classic techniques with experimentation to bring ideas and stories to life through compelling visual imagery.',
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

async function fetchHeroImages() {
    const objects = await listObjects('PHOTOS/HERO');
    const fileUrls = generateFileUrls(objects);

    const sortedFileUrls = fileUrls.sort((a, b) => {
        const aFileName = a.split('/').pop();
        const bFileName = b.split('/').pop();
        return aFileName!.localeCompare(bFileName!);
    });

    return sortedFileUrls;
}

async function fetchFeaturedImages() {
    const objects = await listObjects('PHOTOS/FEATURED WORK');
    const fileUrls = generateFileUrls(objects);

    const fetchedImages: MediaItem[] = fileUrls
        .map((fileUrl: string) => {
            return {
                type: 'image',
                src: fileUrl,
                tags: ['FeaturedImage']
            } as MediaItem;
        })
        .sort((a: any, b: any) => {
            const aFileName = a.src.split('/').pop();
            const bFileName = b.src.split('/').pop();
            return aFileName!.localeCompare(bFileName!);
        });

    return fetchedImages;
}

export default async function Home() {
    const heroImages = await fetchHeroImages();
    const featuredImages = await fetchFeaturedImages();

    return (
        <>
            <HeroBackground images={heroImages} />{' '}
            {/* Pass fetched images to the component */}
            <div className="w-full flex flex-col items-center px-3 md:px-9">
                <Hero />
                <Intro />
                <FeaturedWork images={featuredImages} />
                <Services />
            </div>
        </>
    );
}
export const revalidate = 86400; // (24 hours)
