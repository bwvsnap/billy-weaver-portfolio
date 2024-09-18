// app/gallery/page.tsx

import { Gallery } from '../components/Gallery';

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

export default function GalleryPage() {
    return (
        <div className="pt-[130px] mb-32 w-full">
            <Gallery />
        </div>
    );
}
