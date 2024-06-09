'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = ['/images/hero.jpeg'];

const HeroBackground: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 500000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute flex justify-center items-center w-full h-[calc(100vh-100px)] md:h-screen z-[-10]">
            <Image
                src={images[currentImageIndex]}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Background"
                objectPosition="50% 35%"
                priority
            />
            <div className="absolute bottom-0 w-full h-[50vh] z-49 bottom-fade"></div>
            <div className="absolute bottom-[-24vh] w-full h-[26vh] z-49 bottom-fade-r "></div>
        </div>
    );
};

export default HeroBackground;
