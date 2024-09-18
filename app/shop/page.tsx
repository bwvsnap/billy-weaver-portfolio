export const metadata = {
    title: 'Shop | Billy Weaver Photography & Videography',
    description:
        'Check out the upcoming shop by Billy Weaver. Discover exclusive photography and videography products soon to be available for purchase.',
    openGraph: {
        title: 'Shop | Billy Weaver Photography & Videography',
        description:
            'Explore Billy Weaver’s upcoming shop where you will soon find exclusive photography and videography products. Stay tuned for updates!',
        url: 'https://billyweaver.co.uk/shop',
        images: [
            {
                url: 'https://billyweaver.co.uk/images/billy.jpg', // Use an appropriate placeholder image
                width: 1200,
                height: 800,
                alt: 'Shop Coming Soon'
            }
        ],
        site_name: 'Billy Weaver'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@billyweaver',
        title: 'Shop | Billy Weaver Photography & Videography',
        description:
            'The shop by Billy Weaver is coming soon! Get ready to explore exclusive products related to photography and videography.',
        images: ['https://billyweaver.co.uk/images/billy.jpg']
    },
    icons: {
        icon: '/favicon.ico'
    },
    robots: {
        index: false, // If the shop is not yet live, you might want to prevent indexing
        follow: false
    }
};

export default async function ShopPage() {
    return (
        <div className=" h-screen w-full flex flex-col items-center justify-center font-bold">
            <h1 className=" font-monument text-2xl md:text-6xl">
                {' '}
                SHOP COMING SOON
            </h1>
        </div>
    );
}
