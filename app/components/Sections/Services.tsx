import Image from 'next/image';
import { IconBaseProps } from 'react-icons';
import { BsSoundwave } from 'react-icons/bs';
import { CiCamera, CiDesktopMouse2 } from 'react-icons/ci';
import { PiFilmReelLight } from 'react-icons/pi';
import { BsRecordCircle } from 'react-icons/bs';

import { MdCamera } from 'react-icons/md';

import { RiCameraLensLine } from 'react-icons/ri';

import { VscRecord } from 'react-icons/vsc';

const services = [
    {
        imgUrl: '/images/g1.jpeg',
        title: 'Photography',
        description: 'Capture moments with clarity and creativity',
        Icon: MdCamera
    },
    {
        imgUrl: '/images/g2.jpeg',
        title: 'Videography',
        description: 'Transform your vision into stunning visual stories',
        Icon: VscRecord
    },
    {
        imgUrl: '/images/g3.jpeg',
        title: 'Sound',
        description:
            'Professional sound engineering for impeccable audio quality',
        Icon: BsSoundwave
    },
    {
        imgUrl: '/images/g4.jpeg',
        title: 'Editing',
        description: 'Crafting seamless narratives from raw footage',
        Icon: CiDesktopMouse2
    }
];

interface ServiceCardProps {
    imgUrl: string;
    title: string;
    description: string;
    Icon: React.ComponentType<IconBaseProps>;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    imgUrl,
    title,
    description,
    Icon
}) => {
    return (
        <div className=" flex flex-col items-center w-full space-y-8">
            <div className="relative overflow-hidden w-full aspect-[0.74]  rounded-xl md:mb-2">
                <Image
                    src={imgUrl}
                    alt={title + ' service card image'}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 p-2">
                    <Icon className="text-5xl md:text-6xl text-stone-100 bg-black/20 backdrop-blur-sm	rounded-full " />
                </div>
            </div>
            <div className="flex flex-col space-y-1 md:space-y-3 justify-center w-full">
                <h3 className="text-lg md:text-3xl font-normal">{title}</h3>
                <h4 className="text-base md:text-xl text-stone-400">
                    {description}
                </h4>
            </div>
        </div>
    );
};

export const Services = () => {
    return (
        <div className="z-[-1] mb-40 flex flex-col space-y-20 justify-center items-center w-full">
            <h2 className="font-monument text-2xl md:text-5xl lg:text-7xl w-full font-bold">
                SERVICES
            </h2>
            <ul className="w-full   z-[-1] grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-6  ">
                {services.map((service, index) => (
                    <li key={index}>
                        <ServiceCard
                            imgUrl={service.imgUrl}
                            title={service.title}
                            description={service.description}
                            Icon={service.Icon}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
