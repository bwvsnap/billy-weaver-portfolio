'use client';
import Image from 'next/image';
import InternalLink from '../InternalLink';
import { useState, useEffect } from 'react';
import Lightbox from '../Lightbox';
import { MediaItem } from '@/app/interfaces/mediaItem';

const FeaturedWork = () => {
    const [lightboxActive, setLightboxActive] = useState<boolean>(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
        null
    );
    const [images, setImages] = useState<MediaItem[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imageResponse = await fetch(
                    '/api/listFiles?path=PHOTOS/FEATURED WORK',
                    {
                        method: 'GET'
                    }
                );

                if (!imageResponse.ok) {
                    throw new Error('Failed to fetch image files');
                }

                const imageData = await imageResponse.json();
                const fileUrls = imageData.files;

                const fetchedImages: MediaItem[] = fileUrls.map(
                    (fileUrl: string) => {
                        return {
                            type: 'image',
                            src: fileUrl,
                            tags: ['FeaturedImage']
                        };
                    }
                );

                setImages(fetchedImages);
            } catch (error) {
                console.error(error);
                // Handle the error appropriately, e.g., set an error state or show a message to the user
            }
        };

        fetchImages();
    }, []); // Empty dependency array means this effect runs once on mount

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
        <div className="flex flex-col mb-20 md:mb-40 justify-center items-center w-full bg-green-200">
            <h2
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="text-center font-monument text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-8 md:mb-20 w-full font-bold"
            >
                FEATURED WORK
            </h2>
            <div className="w-full mb-20 md:mb-32 grid grid-cols-2 grid-flow-row md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative rounded-2xl aspect-square overflow-hidden cursor-pointer group"
                        data-aos="fade-in"
                        data-aos-once="true"
                        data-aos-duration="800"
                        data-aos-delay={index * 100}
                        onClick={() => handleImageClick(index)}
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
                className="w-full flex flex-row justify-center"
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
