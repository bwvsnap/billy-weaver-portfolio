export interface MediaItem {
    type: 'image' | 'video';
    src: string;
    tags: string[];
    thumbnail?: string;
    blurDataURL?: string;
}
