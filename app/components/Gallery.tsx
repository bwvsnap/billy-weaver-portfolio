'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { GalleryTag } from './GalleryTag';

interface Image {
    src: string;
    tags: string[];
}

const allTags = ['Street', 'Event', 'Product', 'Cinematography']; // Define all possible tags

const images: Image[] = [];

for (let i = 0; i < 50; i++) {
    const selectedTags: string[] = [];

    const numberOfTagsToAdd = Math.floor(Math.random() * 2) + 1; // Will be either 1 or 2

    while (selectedTags.length < numberOfTagsToAdd) {
        const randomTag = allTags[Math.floor(Math.random() * allTags.length)]; // Select a random tag
        if (!selectedTags.includes(randomTag)) {
            selectedTags.push(randomTag); // Add the tag if not already added
        }
    }

    const image: Image = {
        src: 'https://source.unsplash.com/collection/8858705?' + i,
        tags: selectedTags
    };
    images.push(image);
}

export const Gallery = () => {
    const [activeTag, setActiveTag] = useState<string>('All');

    const filteredImages = images.filter((image) =>
        activeTag === 'All' ? true : image.tags.includes(activeTag)
    );

    return (
        <>
            <div className="flex flex-wrap justify-center mb-20">
                <GalleryTag
                    tag="All"
                    activeTag={activeTag}
                    setActiveTag={setActiveTag}
                />
                {allTags.map((tag) => (
                    <GalleryTag
                        key={tag}
                        tag={tag}
                        activeTag={activeTag}
                        setActiveTag={setActiveTag}
                    />
                ))}
            </div>

            <div className="w-full px-5 md:px-20 columns-2 md:columns-4 gap-4">
                {filteredImages.map((image, index) => (
                    <div key={index} className="mb-4 inline-block">
                        <Image
                            src={image.src}
                            alt={`Image with tags: ${image.tags.join(', ')}`}
                            width={500}
                            height={500}
                            layout="responsive"
                            className="w-full h-auto"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
