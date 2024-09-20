'use client';
import { IconBaseProps } from 'react-icons';
import { BsSoundwave } from 'react-icons/bs';
import { VscRecord } from 'react-icons/vsc';
import { MdCamera } from 'react-icons/md';
import { PiTarget } from 'react-icons/pi';
import { MdArrowForward } from 'react-icons/md';
import { useEffect, useState } from 'react';

const services = [
    {
        title: 'Photography',
        description: 'Capture moments with clarity and creativity',
        bulletPoints: [
            'Live event coverage',
            'Professional, creative portraiture',
            'Commercial shoots',
            'Retouching and colour correction'
        ],
        software: 'Capture ONE, Adobe Lightroom/Photoshop, Affinity Photo 2',
        Icon: MdCamera
    },
    {
        title: 'Videography',
        description: 'Transform your vision into stunning visual stories',
        bulletPoints: [
            'Long-form documentary and brand storytelling',
            'Social first content',
            'Live event capture',
            'PTZ camera control and live feed switching'
        ],
        software: 'DaVinci Resolve, Premiere Pro',
        Icon: VscRecord
    },
    {
        title: 'Audio',
        description:
            'Professional sound production for impeccable audio quality',
        bulletPoints: [
            'Audio repair and restoration',
            'Sound design and foley',
            'Audio production',
            'Vocal processing'
        ],
        software:
            'Logic Pro X, iZotope RX/Ozone, Fairlight, Soundtoys, FabFilter',
        Icon: BsSoundwave
    },
    {
        title: 'Creative Strategy',
        description: 'Ensure your project stays true to your brand and ethos',
        bulletPoints: [
            'Content strategy and brand alignment',
            'Audience-driven content development',
            'Engagement and reach optimisation',
            'Brand awareness campaigns',
            'Storyboarding '
        ],
        Icon: PiTarget
    }
];

interface ServiceCardProps {
    title: string;
    description: string;
    bulletPoints: string[];
    software?: string;
    Icon: React.ComponentType<IconBaseProps>;
    delay: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    bulletPoints,
    software,
    Icon,
    delay
}) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
            data-aos-delay={delay}
            className="group perspective w-2/3 mx-auto lg:w-full h-[250px] md:h-[350px] "
        >
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of the card */}
                <div className="absolute  w-full h-full backface-hidden flex flex-col items-center justify-center space-y-4 md:space-y-8 p-4 md:p-6 border-stone-100/50 bg-[#0b0b0b] border-[1px] rounded-lg shadow-lg">
                    <Icon className="text-5xl md:text-6xl text-stone-100 bg-black/20 backdrop-blur-sm rounded-full" />
                    <h3 className="text-lg md:text-2xl xl:text-3xl font-normal text-center">
                        {title}
                    </h3>
                    <p className="text-sm md:text-lg 2xl:text-xl text-stone-400 text-center  md:w-full">
                        {description}
                    </p>
                    <MdArrowForward className="text-2xl md:text-4xl" />
                </div>

                {/* Back of the card */}
                <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] items-center p-4 md:p-6 bg-[#0b0b0b]  border-stone-100/50 border-[1px] rounded-lg shadow-lg">
                    <ul className="text-sm md:text-lg text-stone-100 text-center w-full flex flex-col justify-between h-full">
                        {bulletPoints.map((point, index) => (
                            <li key={index} className="list-inside">
                                {point}
                            </li>
                        ))}
                        {software && (
                            <li className="italic text-stone-400 list-inside">
                                {software}
                            </li>
                        )}
                    </ul>
                </div>
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
        <div className="mb-32 max-w-screen-2xl flex flex-col space-y-10 justify-center items-center w-full ">
            <h2
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="font-monument text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center w-full font-bold"
            >
                SERVICES
            </h2>
            <p
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="md:w-3/4 2xl:w-4/5  text-base md:text-2xl 2xl:text-4xl md:leading-[2.4rem] 2xl:leading-[2.8rem] text-stone-400 text-center"
            >
                With a focus on sharp execution and strategic content, I
                establish and elevate visual identity through distinctive
                imagery. Whether refining your vision or building it from
                scratch, let me help you bring your ideas to life with clarity
                and creativity.
            </p>

            <ul className="w-full grid grid-cols-1 lg:grid-cols-4 gap-y-8 gap-x-6 pt-4">
                {services.map((service, index) => (
                    <li key={index}>
                        <ServiceCard
                            title={service.title}
                            software={service.software}
                            description={service.description}
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
