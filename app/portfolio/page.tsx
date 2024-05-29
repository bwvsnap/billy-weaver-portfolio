import { getPlaiceholder } from 'plaiceholder';
import { Gallery } from '../components/Gallery';
import { MediaItem } from '../interfaces/mediaItem';

const allTags = ['Street', 'Event', 'Product', 'Cinematography'];

const generateMediaItems = async (): Promise<MediaItem[]> => {
    const mediaItems: MediaItem[] = [];

    for (let i = 0; i < 50; i++) {
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

        const randomImageIndex = Math.floor(Math.random() * 18) + 1;

        const mediaItem: MediaItem = {
            type: 'image',
            src: `/images/portfolio/image${randomImageIndex}.jpg`,
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
        const selectedTags: string[] = ['Cinematography'];
        mediaItems.push({
            type: 'video',
            src: `https://vimeo.com/${id[0]}`,
            tags: selectedTags,
            thumbnail: id[1]
        });
    });

    return mediaItems;
};

const processMediaItems = async (
    mediaItems: MediaItem[]
): Promise<MediaItem[]> => {
    return await Promise.all(
        mediaItems.map(async (item) => {
            if (item.type === 'video') {
                const buffer = await fetch(item.thumbnail ?? item.src).then(
                    async (res) => {
                        if (!res.ok) {
                            const errorText = await res.text();
                            throw new Error(
                                `Failed to fetch video thumbnail: ${res.status} ${res.statusText}. ${errorText}`
                            );
                        }
                        return Buffer.from(await res.arrayBuffer());
                    }
                );

                const { base64 } = await getPlaiceholder(buffer);
                return { ...item, blurDataURL: base64 };
            }

            // For local images, return the item as is
            return item;
        })
    );
};

export default async function PortfolioPage() {
    let mediaItems = await generateMediaItems();
    mediaItems = await processMediaItems(mediaItems);
    return (
        <div className="pt-[130px]">
            <Gallery mediaItems={mediaItems} allTags={allTags} />
        </div>
    );
}
