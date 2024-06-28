import Image from 'next/image';
import InternalLink from '../components/InternalLink';

export default function About() {
    return (
        <div className="flex flex-col items-center">
            <div className=" max-w-screen-2xl pt-[160px] px-3 md:px-20 w-full   flex flex-col justify-center items-center mb-32">
                <div className="flex flex-col justify-center items-center space-y-16  w-full h-1/2 md:h-auto ">
                    <h1 className="text-2xl text-center md:text-6xl xl:text-7xl font-semibold font-monument  2xl:text-8xl">
                        {' '}
                        CAPTURING MOMENTS, CRAFTING STORIES{' '}
                    </h1>

                    <div className="flex flex-col-reverse md:flex-row  items-center md:items-stretch justify-between w-full gap-16">
                        <div className="flex flex-col w-full md:w-2/3  font-light  xl:leading-8 2xl:leading-9 text-sm md:text-base  2xl:text-lg space-y-10">
                            <p>
                                {' '}
                                I have been taking photographs since I was old
                                enough to hold a camera. I am constantly amazed
                                at the power a single photo can have over
                                one&apos;s imagination, and my aim is always to
                                squeeze out every resource available within that
                                frame to aid that process. Whatever the
                                assignment, my primary interest is to capture
                                the story of the subject, or to at least invite
                                the observer in to create their own.
                            </p>
                            <p>
                                {' '}
                                I enjoy photography in all it&apos;s forms, and
                                the different challenges that come with
                                different briefs. I think there should always be
                                some compelling element to a photo, so whatever
                                the assignment, I abide by this rule.
                            </p>
                            <p>
                                {' '}
                                I am available for hire for any and all
                                scenarios, with a background in portraiture,
                                live music & nightlife and urban photography, as
                                well as significant experience in corporate
                                shoots such as staff profiles, food & drinks
                                menus and conference coverage. Any
                                photojournalistic projects are of particular
                                interest to me. I use my own equipment and am
                                able to travel within the UK.
                            </p>
                        </div>
                        <div className="relative  h-64 w-64 md:h-auto md:w-96">
                            <Image
                                className="rounded-full md:rounded-xl	 "
                                src={'/images/billy.jpg'}
                                alt={''}
                                fill
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row w-full  gap-3 md:gap-4 flex-wrap justify-start md:justify-start items-start">
                        <InternalLink
                            href="/portfolio"
                            text="See My Work"
                            large={true}
                        />
                        <InternalLink
                            href="/contact"
                            text="Get in Touch"
                            large={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
