'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroBackground.module.css';

const HeroBackground: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    '/api/listFiles?path=PHOTOS/HERO',
                    {
                        method: 'GET'
                    }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch image files');
                }

                const data = await response.json();
                const fileUrls = data.files as string[];
                const sortedFileUrls = fileUrls.sort((a, b) => {
                    const aFileName = a.split('/').pop();
                    const bFileName = b.split('/').pop();
                    return aFileName!.localeCompare(bFileName!);
                });

                setImages(sortedFileUrls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="absolute flex justify-center items-center w-full h-[calc(100vh-100px)] md:h-screen z-[-10]">
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt={`Background ${index}`}
                    objectPosition="50% 50%"
                    priority
                    className={`${styles.image} ${
                        index === currentImageIndex
                            ? styles.visible
                            : styles.hidden
                    }`}
                />
            ))}
            <div className={styles.overlay}></div>
            <div className="absolute bottom-0 w-full h-[50vh] z-49 bottom-fade"></div>
            <div className="absolute bottom-[-24vh] w-full h-[26vh] z-49 bottom-fade-r "></div>
        </div>
    );
};

export default HeroBackground;
