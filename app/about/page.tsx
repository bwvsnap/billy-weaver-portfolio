import Image from 'next/image';
import InternalLink from '../components/InternalLink';

export const metadata = {
    title: 'About | Billy Weaver Photography & Videography',
    description:
        'Learn about Billy Weaver, a Manchester-based photographer and videographer. Discover his passion for capturing moments and crafting stories through his work.',
    openGraph: {
        title: 'About | Billy Weaver Photography & Videography',
        description:
            'Explore the story behind Billy Weaver, a dedicated photographer and videographer from Manchester. Discover his journey and passion for visual storytelling.',
        url: 'https://billyweaver.co.uk/about',
        images: [
            {
                url: 'https://billyweaver.co.uk/images/billy.jpg',
                width: 1200,
                height: 800,
                alt: 'Billy Weaver Photography and Videography'
            }
        ],
        site_name: 'Billy Weaver'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@billyweaver',
        title: 'About | Billy Weaver Photography & Videography',
        description:
            'Get to know Billy Weaver and his journey as a photographer and videographer. Discover his passion for capturing moments and storytelling.',
        images: ['https://billyweaver.co.uk/images/billy.jpg']
    },
    icons: {
        icon: '/favicon.ico'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function About() {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-screen-2xl pt-[160px] px-3 md:px-20 w-full flex flex-col justify-center items-center mb-32">
                <div className="flex flex-col justify-center items-center space-y-8 md:space-y-16 w-full h-1/2 md:h-auto">
                    <h1 className="text-center flex flex-col text-xl md:text-5xl lg:text-7xl font-semibold font-monument">
                        <span>FROM CAPTURING</span> <span> MOMENTS TO</span>{' '}
                        <span>CRAFTING STORIES</span>
                    </h1>
                    <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between w-full gap-8 md:gap-16">
                        <div className=" text-stone-400 flex flex-col w-full md:w-2/3 font-light xl:leading-8 2xl:leading-9 text-sm md:text-base 2xl:text-lg space-y-10">
                            <p>
                                As a child, I often found myself amid two
                                worlds: the vibrant, bustling streets of the
                                City of Manchester, and the serene, rolling
                                hills of pine and heather that comprise the Peak
                                District and Yorkshire Dales national parks. Two
                                completely different worlds, but each no less
                                beautiful and intriguing than the other. From
                                recognising this comparison came a general
                                fascination and curiosity toward the world
                                around us and the people and things that make it
                                up. At age ten I got a small Panasonic Lumix
                                compact camera as a gift from my grandmother.
                                From this point I became obsessed with capturing
                                just about everything I laid my eyes on;
                                animals, roads, strangers passing on the street,
                                friends, trees, walls...anything and everything
                                was a potential point of intrigue.
                            </p>

                            <p>
                                Coming from a long line of photographers,
                                journalists, artists and musicians, I
                                simultaneously developed a strong sense of
                                storytelling, and it wasn&apos;t long before I
                                was applying this to my photography. How can a
                                picture be more than just a snapshot in time –
                                how can it convey emotion, meaning and
                                narrative? Shortly after, as my long-standing
                                deep appreciation for film and cinema grew, I
                                experimented with video capture and editing
                                under the tutorship of my Father (a professional
                                film and TV editor and passionate photographer
                                and videographer). Over the following decade and
                                a half, the cameras got bigger (and
                                unfortunately more expensive), and I continued
                                to hone my skills and ambitions…
                            </p>

                            <p>
                                Today, I am a photographer and videographer
                                based in the heart of Manchester, a city whose
                                rich multiculturalism and iconic cultural
                                landscape inspire me daily. My work is driven by
                                a deep love for travel, people, and the stories
                                they carry. I always strive to convey the
                                emotion and essence of each moment I capture.
                                Outside of my work I&apos;m an avid musician,
                                composing and producing music that is very often
                                guided by visual imagery of all kinds. Whenever
                                I can get outside, I do, whether it&apos;s to
                                climb, hike or travel.
                            </p>

                            <p>
                                In my professional journey I&apos;ve been
                                fortunate enough to work on a wide variety of
                                projects, from live music events to commercial
                                campaigns. My style leans heavily towards the
                                cinematic, always aiming to elevate the
                                narrative and create intrigue, whether the
                                assignment is a commercial or photojournalistic
                                one. If it can help the image and story stand
                                out, I&apos;ll do it.
                            </p>

                            <p>
                                Every project I take on is a collaboration, a
                                journey to uncover and showcase the unique story
                                behind it. Whether you&apos;re looking to
                                capture the energy of a live event, the essence
                                of a brand, or the beauty of a landscape,
                                individual, ensemble or business - I&apos;m here
                                to help bring your vision to life. Let&apos;s
                                create something extraordinary together.
                            </p>
                        </div>
                        <div className="flex flex-col  gap-20 relative  md:h-auto w-2/3 md:w-1/3">
                            <Image
                                className="rounded-xl"
                                src={'/images/billy.jpg'}
                                alt={''}
                                width={500}
                                height={500}
                                layout="intrinsic"
                                objectFit="cover"
                            />
                            <div className="hidden md:flex flex-col w-full gap-3 md:gap-4 flex-wrap justify-start md:justify-start items-start">
                                <InternalLink
                                    href="/portfolio"
                                    text="See My Work"
                                    large={true}
                                />
                                <InternalLink
                                    href="/contact"
                                    text="Get In Touch"
                                    large={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden flex-row w-full gap-3 md:gap-4 flex-wrap justify-start md:justify-start items-start">
                        <InternalLink
                            href="/portfolio"
                            text="See My Work"
                            large={true}
                        />
                        <InternalLink
                            href="/contact"
                            text="Get In Touch"
                            large={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
