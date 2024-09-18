'use client';
import Image from 'next/image';
import InternalLink from '../InternalLink';
import { useState } from 'react';
import Lightbox from '../Lightbox';
import { MediaItem } from '@/app/interfaces/mediaItem';

// Dummy data for now, which will later be replaced with API data
const images: MediaItem[] = [
    {
        src: '/images/1.jpg',
        type: 'image',
        tags: []
    },
    {
        src: '/images/2.jpg',
        type: 'image',
        tags: []
    },
    {
        src: '/images/3.jpg',
        type: 'image',
        tags: []
    },
    {
        src: '/images/4.jpg',
        type: 'image',
        tags: []
    },
    {
        src: '/images/5.jpg',
        type: 'image',
        tags: []
    },
    {
        src: '/images/6.jpg',
        type: 'image',
        tags: []
    }
];

const FeaturedWork = () => {
    const [lightboxActive, setLightboxActive] = useState<boolean>(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
        null
    );
    const handleImageClick = (index: number) => {
        document.body.classList.add('overflow-hidden');
        setLightboxActive(true);
        setSelectedItemIndex(index);
    };

    const closeLightbox = () => {
        document.body.classList.remove('overflow-hidden');
        setLightboxActive(false);
        setSelectedItemIndex(null);
    };
    return (
        <div className="flex flex-col mb-20 md:mb-40 justify-center items-center w-full">
            <h2
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="font-monument  text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-20 w-full font-bold"
            >
                FEATURED WORK
            </h2>
            <div className="w-full mb-20 md:mb-32 grid grid-cols-2 grid-flow-row md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5 ">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative rounded-2xl aspect-square overflow-hidden cursor-pointer group"
                        data-aos="fade-in"
                        data-aos-once="true"
                        data-aos-duration="800"
                        data-aos-delay={index * 100}
                        onClick={() => handleImageClick(images.indexOf(image))}
                    >
                        <Image
                            className="transition-transform duration-500 group-hover:scale-110"
                            src={image.src}
                            alt="featured image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                ))}
            </div>
            <div
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className=" w-full flex flex-row justify-start"
            >
                <InternalLink
                    href={'/portfolio'}
                    text={'View All Work'}
                    large={true}
                />
            </div>

            {lightboxActive && (
                <Lightbox
                    filteredMedia={images}
                    selectedItemIndex={selectedItemIndex}
                    onClick={closeLightbox}
                />
            )}
        </div>
    );
};

export default FeaturedWork;
