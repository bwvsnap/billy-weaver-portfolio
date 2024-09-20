'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { GalleryTag } from '../components/GalleryTag';
import { MediaItem } from '../interfaces/mediaItem';
import { FaPlay } from 'react-icons/fa';
import Lightbox from '../components/Lightbox';

export const Gallery: React.FC = () => {
    const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [activeTag, setActiveTag] = useState<string>('All');
    const [columnCount, setColumnCount] = useState<number>(4);
    const [lightboxActive, setLightboxActive] = useState<boolean>(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
        null
    );

    // Hardcoded tags list
    const hardcodedTags = [
        'Music',
        'People',
        'Adventure',
        'Commercial',
        'Video'
    ];

    useEffect(() => {
        const updateColumnCount = () => {
            setColumnCount(window.innerWidth < 768 ? 2 : 4);
        };
        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);

        const fetchMediaItems = async () => {
            try {
                // Fetch Vimeo videos from the API route
                const vimeoResponse = await fetch('/api/listVideos');
                if (!vimeoResponse.ok) {
                    throw new Error('Failed to fetch Vimeo videos');
                }
                const videoMediaItems: MediaItem[] = await vimeoResponse.json();

                // Fetch images
                const imageResponse = await fetch(
                    '/api/listFiles?path=PHOTOS/PORTFOLIO',
                    {
                        method: 'GET'
                    }
                );
                if (!imageResponse.ok) {
                    throw new Error('Failed to fetch image files');
                }
                const imageData = await imageResponse.json();
                const fileUrls = imageData.files;

                const extractTagsFromPath = (path: string): string[] => {
                    const pathParts = path.split('/');
                    const tagsPart = pathParts[pathParts.length - 2];
                    const parsedTags = tagsPart
                        .split('&')
                        .map((tag) => tag.trim());

                    // Only include tags that are in the hardcoded tags list
                    return parsedTags.filter((tag) =>
                        hardcodedTags.includes(tag)
                    );
                };

                // Map image URLs to MediaItems and sort alphabetically by filename
                const imageMediaItems: MediaItem[] = fileUrls
                    .map((fileUrl: string) => {
                        const tags = extractTagsFromPath(fileUrl);
                        return {
                            type: 'image',
                            src: fileUrl,
                            tags
                        };
                    })
                    .sort((a: any, b: any) => {
                        const aFileName = a.src.split('/').pop();
                        const bFileName = b.src.split('/').pop();
                        return bFileName!.localeCompare(aFileName!);
                    });

                // Combine video and image media items
                const allMediaItems = [...imageMediaItems, ...videoMediaItems];

                setMediaItems(allMediaItems);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
        };

        fetchMediaItems();

        return () => window.removeEventListener('resize', updateColumnCount);
    }, []);

    // Filter the media items based on the active tag
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
            <div className="w-full flex flex-wrap justify-center mb-20">
                <GalleryTag
                    tag="All"
                    activeTag={activeTag}
                    setActiveTag={setActiveTag}
                />
                {hardcodedTags.map((tag) => (
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
                                className="w-full relative inline-block cursor-pointer group"
                                onClick={() =>
                                    handleImageClick(
                                        filteredMedia.indexOf(item)
                                    )
                                }
                            >
                                <div className="relative overflow-hidden rounded-xl">
                                    <Image
                                        src={item.thumbnail ?? item.src}
                                        alt={`Media with tags: ${item.tags.join(
                                            ', '
                                        )}`}
                                        width={500}
                                        height={1000}
                                        layout="responsive"
                                        className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110"
                                        quality={80}
                                        priority={
                                            filteredMedia.indexOf(item) < 8
                                        }
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                                </div>
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="rounded-full flex items-center justify-center bg-black/60 p-3 md:p-5 backdrop-blur-sm">
                                            <FaPlay className="text-lg md:text-3xl text-stone-100 pl-1" />
                                        </div>
                                    </div>
                                )}
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
