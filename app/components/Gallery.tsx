'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { GalleryTag } from './GalleryTag';
import { MediaItem } from '../interfaces/mediaItem';
import Lightbox from './Lightbox';

interface GalleryProps {
    mediaItems: MediaItem[];
    allTags: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ mediaItems, allTags }) => {
    const [activeTag, setActiveTag] = useState<string>('All');
    const [columnCount, setColumnCount] = useState<number>(4);
    const [lightboxActive, setLightboxActive] = useState<boolean>(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
        null
    );

    useEffect(() => {
        const updateColumnCount = () => {
            setColumnCount(window.innerWidth < 768 ? 2 : 4);
        };
        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);

        document.body.classList.remove('overflow-hidden');

        return () => window.removeEventListener('resize', updateColumnCount);
    }, []);

    const filteredMedia = mediaItems.filter((item) =>
        activeTag === 'All' ? true : item.tags.includes(activeTag)
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
                                onClick={() =>
                                    handleImageClick(
                                        filteredMedia.indexOf(item)
                                    )
                                }
                            >
                                <Image
                                    src={item.thumbnail ?? item.src}
                                    alt={`Media with tags: ${item.tags.join(
                                        ', '
                                    )}`}
                                    width={500}
                                    height={1000}
                                    layout="responsive"
                                    className="w-full h-auto"
                                    quality={50}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {lightboxActive && (
                <Lightbox
                    filteredMedia={filteredMedia}
                    selectedItemIndex={selectedItemIndex}
                    onClick={closeLightbox}
                />
            )}
        </>
    );
};
