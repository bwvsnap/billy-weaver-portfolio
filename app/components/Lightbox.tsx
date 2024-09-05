import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Navigation, Pagination, Virtual } from 'swiper/modules';
import { MediaItem } from '../interfaces/mediaItem';
import { FC, useState } from 'react';
import {
    PrevButton,
    NextButton,
    CloseButton,
    CountWidget
} from './LightboxWidgets';
import SwiperCore from 'swiper';

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
    const [currentSlide, setCurrentSlide] = useState<number>(
        selectedItemIndex ?? 0
    );

    const isPrioritySlide = (
        index: number,
        currentIndex: number,
        length: number
    ) => {
        return (
            index === currentIndex ||
            index === (currentIndex - 1 + length) % length ||
            index === (currentIndex - 2 + length) % length ||
            index === (currentIndex + 1) % length ||
            index === (currentIndex + 2) % length
        );
    };

    const getLoadingAttribute = (index: number) => {
        return isPrioritySlide(index, currentSlide, filteredMedia.length)
            ? 'eager'
            : 'lazy';
    };

    const swiperOptions = {
        modules: [Navigation, Pagination, Keyboard],
        spaceBetween: 30,
        loop: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        initialSlide: selectedItemIndex ?? 0,
        onSlideChange: (swiper: SwiperCore) => {
            setCurrentSlide(swiper.realIndex);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black py-5 md:p-5">
            <Swiper
                className="w-full h-full swiper-container"
                {...swiperOptions}
            >
                {filteredMedia.map((item, index) => (
                    <SwiperSlide
                        className={`flex relative py-12 ${
                            item.type === 'video' ? 'py-32' : ''
                        } md:py-10 md:p-10`}
                        key={index}
                        data-swiper-slide-index={index}
                    >
                        <div className="relative w-full h-full">
                            {item.type === 'image' ? (
                                <Image
                                    src={item.src}
                                    alt={`Selected media with tags: ${item.tags.join(
                                        ', '
                                    )}`}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    className="object-contain w-full h-full"
                                    priority={isPrioritySlide(
                                        index,
                                        currentSlide,
                                        filteredMedia.length
                                    )}
                                />
                            ) : (
                                <iframe
                                    src={`https://player.vimeo.com/video/${item.src}`}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                    loading={getLoadingAttribute(index)}
                                ></iframe>
                            )}
                        </div>
                    </SwiperSlide>
                ))}

                {/* Widgets */}
                <div>
                    <CountWidget
                        total={filteredMedia.length}
                        currentIdx={currentSlide}
                    />
                    <CloseButton onClick={onClick} />

                    <div className="hidden md:block">
                        <NextButton />
                        <PrevButton />
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Lightbox;
