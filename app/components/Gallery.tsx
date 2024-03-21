'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { GalleryTag } from './GalleryTag';

const allTags = ['Street', 'Event', 'Product', 'Cinematography']; // Define all possible tags

interface MediaItem {
    type: 'image' | 'video';
    src: string;
    tags: string[];
    thumbnail?: string; // Optional placeholder for videos
}

const mediaItems: MediaItem[] = [];

for (let i = 0; i < 50; i++) {
    const selectedTags: string[] = [];

    const numberOfTagsToAdd = Math.floor(Math.random() * 2) + 1; // Will be either 1 or 2

    while (selectedTags.length < numberOfTagsToAdd) {
        const randomTag = allTags[Math.floor(Math.random() * allTags.length)]; // Select a random tag
        if (randomTag === 'Cinematography') {
            continue;
        }
        if (!selectedTags.includes(randomTag)) {
            selectedTags.push(randomTag); // Add the tag if not already added
        }
    }

    const mediaItem: MediaItem = {
        type: 'image',
        src: 'https://source.unsplash.com/collection/8858705?' + i,
        tags: selectedTags
    };
    mediaItems.push(mediaItem);
}

const videoIds = [
    [
        '93003441',
        'https://i.vimeocdn.com/video/472928026-41c6c9bb99dacf5dc0124757d2a0406340cff0046c5c6da3c19483ae6746b213-d_640xauto'
    ],
    [
        '265111898',
        'https://i.vimeocdn.com/video/695043548-885bab3819a63ebcabdfba41a496c24351a4c824957f40916917b7431c89e1c4-d_640xauto'
    ]
];
videoIds.forEach((id, index) => {
    const selectedTags: string[] = ['Cinematography'];
    mediaItems.push({
        type: 'video',
        src: id[0],
        tags: selectedTags,
        thumbnail: id[1]
    });
});

export const Gallery = () => {
    const [activeTag, setActiveTag] = useState<string>('All');
    const [columnCount, setColumnCount] = useState<number>(4);

    useEffect(() => {
        const updateColumnCount = () => {
            setColumnCount(window.innerWidth < 768 ? 2 : 4);
        };

        updateColumnCount();

        window.addEventListener('resize', updateColumnCount);
        return () => window.removeEventListener('resize', updateColumnCount);
    }, []);

    const filteredMedia = mediaItems.filter((item) =>
        activeTag === 'All' ? true : item.tags.includes(activeTag)
    );

    function getColumns(colIndex: number) {
        return filteredMedia.filter(
            (item, idx) => idx % columnCount === colIndex
        );
    }

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

            <div className="w-full px-5 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {Array.from({ length: columnCount }, (_, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-4">
                        {getColumns(colIndex).map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full inline-block cursor-pointer"
                            >
                                <Image
                                    src={item.thumbnail ?? item.src}
                                    alt={`Media with tags: ${item.tags.join(
                                        ', '
                                    )}`}
                                    width={500}
                                    height={500}
                                    layout="responsive"
                                    className="w-full h-auto"
                                    quality={50}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};
