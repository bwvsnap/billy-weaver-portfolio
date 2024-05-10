import React, { FC } from 'react';
import { useSwiper } from 'swiper/react';

import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { HiOutlineX } from 'react-icons/hi';

interface CloseButtonProps {
    onClick: () => void;
}

export const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute top-3 right-10 z-[50000] flex items-center justify-center  rounded-full  hover:text-gray-100 text-gray-200/50 transition-colors duration-300"
        >
            <HiOutlineX className="text-4xl" />
        </button>
    );
};

interface CountWidgetProps {
    currentIdx: number;
    total: number;
}
export const CountWidget: FC<CountWidgetProps> = ({ currentIdx, total }) => {
    return (
        <div className="font-light absolute top-3 left-10 text-gray-200/50 z-50">
            {currentIdx + 1} / {total}
        </div>
    );
};

export const PrevButton = () => {
    const swiper = useSwiper();

    return (
        <button
            onClick={() => swiper.slidePrev()}
            className="absolute top-1/2 left-5 z-[50000] flex items-center justify-center w-20 h-20 border   border-gray-200/50 rounded-full hover:border-gray-100 hover:text-gray-100 text-gray-200/50 transition-colors duration-300"
        >
            <GoArrowLeft className="text-2xl" />
        </button>
    );
};

export const NextButton = () => {
    const swiper = useSwiper();

    return (
        <button
            onClick={() => swiper.slideNext()}
            className="absolute top-1/2 right-5  z-[500] flex items-center justify-center w-20 h-20 border border-gray-200/50 rounded-full hover:border-gray-100 hover:text-gray-100 text-gray-200/50 transition-colors duration-300"
        >
            <GoArrowRight className="text-2xl" />
        </button>
    );
};
