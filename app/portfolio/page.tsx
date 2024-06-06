'use client';
import { useEffect, useState } from 'react';
import { Gallery } from '../components/Gallery';
import { MediaItem } from '../interfaces/mediaItem';

const allTags = ['Street', 'Event', 'Product', 'Cinematography'];

export default function PortfolioPage() {
    const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getFileUrlsFromBucket = async (): Promise<string[]> => {
            try {
                const response = await fetch('/api/listFiles', {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch files');
                }
                const data = await response.json();

                return data.files;
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
                return [];
            }
        };

        const generateMediaItems = async (): Promise<MediaItem[]> => {
            let fileUrls = await getFileUrlsFromBucket();
            fileUrls = Array(5).fill(fileUrls).flat();
            console.log(fileUrls);
            const mediaItems: MediaItem[] = [];

            for (let i = 0; i < fileUrls.length; i++) {
                const selectedTags: string[] = [];
                const numberOfTagsToAdd = Math.floor(Math.random() * 2) + 1;

                while (selectedTags.length < numberOfTagsToAdd) {
                    const randomTag =
                        allTags[Math.floor(Math.random() * allTags.length)];
                    if (randomTag === 'Cinematography') {
                        continue;
                    }
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
            videoIds.forEach((id, index) => {
                const selectedTags: string[] = ['Cinematography'];
                mediaItems.push({
                    type: 'video',
                    src: id[0],
                    tags: selectedTags,
                    thumbnail: id[1]
                });
            });

            return mediaItems;
        };

        const fetchMediaItems = async () => {
            try {
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
    }, []);

    return (
        <div className="pt-[130px]">
            {error && <p>Error: {error}</p>}
            <Gallery mediaItems={mediaItems} allTags={allTags} />
        </div>
    );
}
