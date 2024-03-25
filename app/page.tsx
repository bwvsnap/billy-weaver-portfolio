import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';

export default function Home() {
    return (
        <>
            {/* Image w/ fade */}
            <div className="absolute w-full h-[calc(100vh-100px)]  md:h-screen z-[-10]">
                <Image
                    src="/images/hero.jpeg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Background"
                    objectPosition="50% 35%"
                />
                <div className="absolute bottom-0 w-full h-[50vh] z-index-49 bottom-fade"></div>
            </div>

            <div className=" pb-[1000px] px-3 md:px-9  ">
                {/* Hero Section */}
                <div className="w-full h-[calc(100vh-100px)] md:h-screen flex flex-col pb-12 ">
                    <div className="h-[80px]"></div>

                    <div className="flex flex-col w-full items-center my-auto text-[2rem] leading-none md:leading-[0.9] md:text-[4rem] lg:text-[5.5rem] 2xl:text-[6rem] font-monument font-bold  ">
                        <div className="flex items-start overflow-hidden h-[0.8rem] md:h-[1.4rem] lg:h-8">
                            <h1 className="  text-gray-100/5   ">
                                BILLY WEAVER
                            </h1>
                        </div>
                        <div className="flex items-start overflow-hidden h-4 md:h-7 lg:h-10">
                            <h1 className="  text-gray-100/20   ">
                                BILLY WEAVER
                            </h1>
                        </div>
                        <div className="flex items-center overflow-hidden ">
                            <h1 className="  text-gray-100/100   ">
                                BILLY WEAVER
                            </h1>
                        </div>
                        <div className="flex items-end overflow-hidden h-4 md:h-7 lg:h-10">
                            <h1 className="  text-gray-100/20  ">
                                BILLY WEAVER
                            </h1>
                        </div>
                        <div className="flex items-end overflow-hidden h-[0.8rem] md:h-[1.4rem]  lg:h-8">
                            <h1 className="  text-gray-100/5   ">
                                BILLY WEAVER
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-row items-end  justify-between text-sm md:text-base 2xl:text-lg">
                        <div className="w-1/2">
                            <h2 className="w-full  text-left  font-semibold">
                                {' '}
                                Manchester based{' '}
                            </h2>
                            <h2 className="w-full font-thin text-left">
                                {' '}
                                Freelance photographer & videographer{' '}
                            </h2>
                        </div>
                        <div className="flex flex-col md:flex-row w-1/2 items-end justify-end gap-2 md:gap-8 ">
                            <p className=" flex items-center gap-2 font-light text-xs md:text-sm">
                                {' '}
                                <span>Scroll to Explore</span>{' '}
                                <IoIosArrowDown />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
