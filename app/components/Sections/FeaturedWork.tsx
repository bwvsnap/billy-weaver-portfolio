'use client';
import Image from 'next/image';
import InternalLink from '../InternalLink'; // Ensure this is the correct path to your InternalLink component

// Dummy data for now, which will later be replaced with API data
const images = [
    {
        src: '/images/6.jpg',
        alt: 'Featured image'
    },
    {
        src: '/images/3.jpg',
        alt: 'Featured image'
    },
    {
        src: '/images/4.jpg',
        alt: 'Featured image'
    },
    {
        src: '/images/2.jpg',
        alt: 'Featured image'
    },
    {
        src: '/images/9.jpg',
        alt: 'Featured image'
    },
    {
        src: '/images/1.jpg',
        alt: 'Featured image'
    }
];

const FeaturedWork = () => {
    return (
        <div className="flex flex-col mb-20 md:mb-40 justify-center items-center w-full">
            <h2 className="font-monument text-2xl md:text-6xl mb-20 w-full font-bold">
                FEATURED WORK
            </h2>
            <div className="grid-container w-[95vw] h-[142.5vw] md:w-[95vw] md:h-[63.3vw] z-[-1] mb-20 md:mb-32">
                <div className="grid grid-cols-2 grid-flow-row md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5 h-full w-full">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-row justify-start">
                <InternalLink
                    href={'/portfolio'}
                    text={'View All Work'}
                    large={true}
                />
            </div>
        </div>
    );
};

export default FeaturedWork;
