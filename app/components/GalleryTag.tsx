interface GalleryTagProps {
    tag: string;
    activeTag: string;
    setActiveTag: (tag: string) => void;
}

export const GalleryTag: React.FC<GalleryTagProps> = ({
    tag,
    activeTag,
    setActiveTag
}) => {
    const isActive = tag === activeTag;

    return (
        <button
            className={`w-30 p-1 px-4 m-2 md:m-6 text-md font-light rounded-3xl bg-transparent border ${
                isActive
                    ? 'border-orange-500 text-orange-500'
                    : 'border-gray-100 text-gray-100'
            }`}
            onClick={() => setActiveTag(tag)}
        >
            {tag}
        </button>
    );
};
