'use client';
import { IconBaseProps } from 'react-icons';
import { MdArrowForward } from 'react-icons/md';
import { useEffect, useState } from 'react';

const pricingOptions = [
    {
        title: 'Photography Package',
        price: '£500',
        description: 'Includes up to 6 hours of coverage and 200 edited images.',
        bulletPoints: [
            'Event coverage',
            'Professional editing',
            'Online gallery for viewing and sharing'
        ],
    },
    {
        title: 'Videography Package',
        price: '£750',
        description: 'Captivating video coverage with a cinematic touch.',
        bulletPoints: [
            'Up to 4 minutes of edited video',
            'Social media cutdowns',
            'Online gallery for viewing and sharing'
        ],
    },
    {
        title: 'Audio Package',
        price: '£300',
        description: 'Professional audio production for high-quality sound.',
        bulletPoints: [
            'Mixing and mastering',
            'Custom scoring and composition',
            'Audio repair and restoration'
        ],
    },
    {
        title: 'Creative Strategy Package',
        price: '£400',
        description: 'Ensure your project stays true to your brand and ethos.',
        bulletPoints: [
            'Research and conceptual alignment',
            'Content tailored to brand messaging',
            'Engagement and reach tactics'
        ],
    }
];

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    bulletPoints: string[];
}

export const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    description,
    bulletPoints
}) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
            className="group w-2/3 mx-auto lg:w-full h-[350px] md:h-[400px] p-6 border-stone-100/50 bg-[#0b0b0b] border-[1px] rounded-lg shadow-lg flex flex-col justify-between"
        >
            <div>
                <h3 className="text-lg md:text-2xl xl:text-3xl font-normal text-center">
                    {title}
                </h3>
                <p className="text-2xl md:text-3xl text-stone-100 text-center">
                    {price}
                </p>
                <p className="text-sm md:text-lg 2xl:text-xl text-stone-400 text-center">
                    {description}
                </p>
            </div>
            <ul className="text-sm md:text-lg text-stone-100 text-center">
                {bulletPoints.map((point, index) => (
                    <li key={index} className="list-inside">
                        {point}
                    </li>
                ))}
            </ul>
            <MdArrowForward className="text-2xl md:text-4xl self-center" />
        </div>
    );
};

export const Pricing = () => {
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
        <div className="mb-32 max-w-screen-2xl flex flex-col space-y-10 justify-center items-center w-full">
            <h2
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="font-monument text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center w-full font-bold"
            >
                PRICING
            </h2>
            <p
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="md:w-3/4 2xl:w-4/5 text-base md:text-2xl 2xl:text-4xl md:leading-[2.4rem] 2xl:leading-[2.8rem] text-stone-400 text-center"
            >
                Explore our transparent pricing options designed to suit your needs.
            </p>

            <ul className="w-full grid grid-cols-1 lg:grid-cols-4 gap-y-8 gap-x-6 pt-4">
                {pricingOptions.map((option, index) => (
                    <li key={index}>
                        <PricingCard
                            title={option.title}
                            price={option.price}
                            description={option.description}
                            bulletPoints={option.bulletPoints}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
