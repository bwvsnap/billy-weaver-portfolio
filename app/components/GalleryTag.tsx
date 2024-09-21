import AOS from 'aos';

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

    function handleClick(tag: string) {
        setActiveTag(tag);
        AOS.refreshHard();
    }
    return (
        <button
            className={`w-30 p-1 px-4 m-2 md:m-6 text-md font-light rounded-3xl bg-transparent border hover:border-orange-500 hover:text-orange-500 transition-colors duration-300 ${
                isActive
                    ? 'border-orange-500 text-orange-500'
                    : 'border-stone-100 text-stone-100'
            }`}
            onClick={() => handleClick(tag)}
        >
            {tag}
        </button>
    );
};
