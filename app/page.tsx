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

export default function Home() {
    return (
        <>
            <HeroBackground />
            <div className="w-full flex flex-col items-center px-3 md:px-9">
                <Hero />
                <Intro />
                <FeaturedWork />
                <Services />
            </div>
        </>
    );
}
