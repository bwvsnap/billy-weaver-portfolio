import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { MediaItem } from '../interfaces/mediaItem';
import { FC } from 'react';

interface LightboxProps {
    filteredMedia: MediaItem[];
    selectedItemIndex: number | null;
    onClick: () => void;
}

const Lightbox: FC<LightboxProps> = ({
    filteredMedia,
    selectedItemIndex,
    onClick
}) => {
    const swiperOptions = {
        // Enable navigation and pagination
        modules: [Navigation, Pagination],
        spaceBetween: 30,

        // Start at the selected index
        initialSlide: selectedItemIndex ?? 0
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-95 py-5 md:p-5">
            <Swiper className="w-full h-full " {...swiperOptions}>
                {filteredMedia.map((item, index) => (
                    <SwiperSlide
                        className={`flex relative py-12 ${
                            item.type === 'video' ? 'py-32' : ''
                        } md:py-10 md:p-10`}
                        key={index}
                    >
                        <div className="relative w-full h-full ">
                            {item.type === 'image' ? (
                                <Image
                                    src={item.src}
                                    alt={`Selected media with tags: ${item.tags.join(
                                        ', '
                                    )}`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            ) : (
                                <iframe
                                    src={`https://player.vimeo.com/video/${item.src}`}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                className="absolute top-0 right-0 m-4 text-white z-50"
                onClick={onClick}
            >
                Close
            </button>
        </div>
    );
};

export default Lightbox;
