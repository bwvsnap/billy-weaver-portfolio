'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroBackground.module.css';

interface HeroBackgroundProps {
    images: string[];
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
