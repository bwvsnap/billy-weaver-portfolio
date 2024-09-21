import FeaturedWork from './components/Sections/FeaturedWork';
import Intro from './components/Sections/Intro';
import Hero from './components/Sections/Hero';
import HeroBackground from './components/Sections/HeroBackground';
import { Services } from './components/Sections/Services';

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
    const res = await fetch('/api/listFiles?path=PHOTOS/HERO');

    if (!res.ok) {
        throw new Error('Failed to fetch image files');
    }

    const data = await res.json();
    const fileUrls = data.files as string[];

    // Sort the files by filename
    const sortedFileUrls = fileUrls.sort((a, b) => {
        const aFileName = a.split('/').pop();
        const bFileName = b.split('/').pop();
        return aFileName!.localeCompare(bFileName!);
    });

    return sortedFileUrls;
}

export default async function Home() {
    const heroImages = await fetchHeroImages(); // Fetch images on server

    return (
        <>
            <HeroBackground images={heroImages} />{' '}
            {/* Pass fetched images to the component */}
            <div className="w-full flex flex-col items-center px-3 md:px-9">
                <Hero />
                <Intro />
                <FeaturedWork />
                <Services />
            </div>
        </>
    );
}
