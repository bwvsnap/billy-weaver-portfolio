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
            <h2
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="font-monument text-2xl md:text-7xl mb-20 w-full font-bold"
            >
                FEATURED WORK
            </h2>
            <div className="w-full mb-20 md:mb-32 grid grid-cols-2 grid-flow-row md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5 ">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative rounded-2xl aspect-square overflow-hidden"
                        data-aos="fade-in"
                        data-aos-once="true"
                        data-aos-duration="800"
                        data-aos-delay={index * 100}
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
            <div
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="w-full flex flex-row justify-start"
            >
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
