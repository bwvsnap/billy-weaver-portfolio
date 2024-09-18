'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { GalleryTag } from '../components/GalleryTag';
import { MediaItem } from '../interfaces/mediaItem';
import { FaPlay } from 'react-icons/fa';
import Lightbox from '../components/Lightbox';

// Define allTags as a constant in the component
const allTags = ['Adventure', 'Music', 'People', 'Editorial', 'Video'];

export const Gallery: React.FC = () => {
    const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
    const [error, setError] = useState<string | null>(null);
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

        const fetchMediaItems = async () => {
            try {
                const response = await fetch('/api/listFiles', {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch files');
                }
                const data = await response.json();
                const fileUrls = data.files;

                const generateMediaItems = async (): Promise<MediaItem[]> => {
                    const mediaItems: MediaItem[] = [];
                    for (let i = 0; i < fileUrls.length; i++) {
                        const selectedTags: string[] = [];
                        const numberOfTagsToAdd =
                            Math.floor(Math.random() * 2) + 1;

                        while (selectedTags.length < numberOfTagsToAdd) {
                            const randomTag =
                                allTags[
                                    Math.floor(Math.random() * allTags.length)
                                ];
                            if (randomTag === 'Video') continue;
                            if (!selectedTags.includes(randomTag)) {
                                selectedTags.push(randomTag);
                            }
                        }

                        const mediaItem: MediaItem = {
                            type: 'image',
                            src: fileUrls[i],
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

                    videoIds.forEach((id) => {
                        const selectedTags: string[] = ['Video'];
                        mediaItems.push({
                            type: 'video',
                            src: id[0],
                            tags: selectedTags,
                            thumbnail: id[1]
                        });
                    });

                    return mediaItems;
                };

                const items = await generateMediaItems();
                setMediaItems(items);
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
                                        quality={50}
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
