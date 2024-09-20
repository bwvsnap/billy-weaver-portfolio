'use client';
import { IconBaseProps } from 'react-icons';
import { BsSoundwave } from 'react-icons/bs';
import { CiDesktopMouse2 } from 'react-icons/ci';
import { MdCamera } from 'react-icons/md';
import { VscRecord } from 'react-icons/vsc';
import { useEffect, useState } from 'react';

const services = [
    {
        imgUrl: '/images/g1.jpeg',
        title: 'Photography',
        bulletPoints: [
            'High-quality images',
            'Creative compositions',
            'Event and portrait photography'
        ],
        Icon: MdCamera
    },
    {
        imgUrl: '/images/g2.jpeg',
        title: 'Videography',
        bulletPoints: [
            'Cinematic video production',
            'Drone footage available',
            'Custom video editing'
        ],
        Icon: VscRecord
    },
    {
        imgUrl: '/images/g3.jpeg',
        title: 'Sound',
        bulletPoints: [
            'Professional audio recording',
            'Mixing and mastering services',
            'Live sound engineering'
        ],
        Icon: BsSoundwave
    },
    {
        imgUrl: '/images/g4.jpeg',
        title: 'Editing',
        bulletPoints: [
            'Seamless transitions',
            'Color grading',
            'Storytelling through editing'
        ],
        Icon: CiDesktopMouse2
    }
];

interface ServiceCardProps {
    imgUrl: string;
    title: string;
    bulletPoints: string[];
    Icon: React.ComponentType<IconBaseProps>;
    delay: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    imgUrl,
    title,
    bulletPoints,
    Icon,
    delay
}) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
            data-aos-delay={delay}
            className="flex flex-col items-center justify-center w-full space-y-4 md:space-y-8"
        >
            <Icon className="text-5xl md:text-6xl text-stone-100 bg-black/20 backdrop-blur-sm rounded-full" />

            <div className="flex flex-col space-y-1 md:space-y-3 justify-center items-center w-full">
                <h3 className="text-lg md:text-3xl font-normal text-center">
                    {title}
                </h3>
                <ul className="text-base md:text-xl text-stone-400 text-center w-2/3 md:w-full space-y-1">
                    {bulletPoints.map((point, index) => (
                        <li key={index} className="list-inside">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const Services = () => {
    const [isMdOrLarger, setIsMdOrLarger] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMdOrLarger(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="mb-40 max-w-screen-2xl flex flex-col justify-center items-center w-full">
            <h2
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="font-monument text-2xl md:text-5xl mb-10 lg:text-6xl 2xl:text-7xl text-center w-full font-bold"
            >
                BRINGING VISIONS TO LIFE
            </h2>
            <p
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="text-base md:text-2xl 2xl:text-4xl md:leading-[2.4rem] 2xl:leading-[2.8rem] text-stone-400 text-center mb-14 md:mb-20"
            >
                I utilise my skills in photography, videography, sound
                engineering and post-production to create compelling visual
                narratives that bring your vision to life.
            </p>

            <ul className="w-full grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-6">
                {services.map((service, index) => (
                    <li key={index}>
                        <ServiceCard
                            imgUrl={service.imgUrl}
                            title={service.title}
                            bulletPoints={service.bulletPoints}
                            Icon={service.Icon}
                            delay={isMdOrLarger ? index * 400 : 0}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
