import 'aos/dist/aos.css';

const Hero = () => {
    const data = [
        { title: 'I am a', description: 'Freelance creative producer' },
        {
            title: 'Specialised in',
            description: 'Photo, Film, Sound & Editing'
        },
        { title: 'Based in', description: 'Manchester, UK' }
    ];

    return (
        <>
            <div
                id="test"
                className="w-full h-screen flex flex-col pb-7 pt-[80px]"
            >
                <div
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="800"
                    data-aos-anchor="#test"
                    className="my-auto mx-auto space-y-10 "
                >
                    <h1 className="text-center font-monument font-bold text-5xl md:text-8xl 2xl:text-9xl text-stroke-hover transition-all duration-1000 ease-in cursor-default">
                        BILLY WEAVER
                    </h1>
                </div>
                <div className="w-full flex flex-col gap-7 md:flex-row md:items-end md:justify-start md:gap-16">
                    {data.map((item, index) => (
                        <div
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-duration="700"
                            data-aos-anchor="#test"
                            data-aos-delay={500 + index * 400}
                            key={index}
                        >
                            <p className="w-full text-left text-xs md:text-base 2xl:text-lg text-stone-400">
                                {item.title}
                            </p>
                            <h2 className="w-full text-sm md:text-lg 2xl:text-xl text-left">
                                {item.description}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;
