import 'aos/dist/aos.css';

const Hero = () => {
    return (
        <>
            <div
                id="test"
                className="w-full h-screen flex flex-col pb-7 pt-[80px]"
            >
                <div className="my-auto mx-auto space-y-10 ">
                    <div
                        data-aos="zoom-out"
                        data-aos-once="true"
                        data-aos-duration="800"
                        data-aos-anchor="#test"
                    >
                        <h1 className="text-center font-monument font-bold text-5xl md:text-8xl 2xl:text-9xl text-stroke-hover transition-all duration-1000 ease-in cursor-default">
                            BILLY WEAVER
                        </h1>
                    </div>

                    <h2
                        data-aos="fade-in"
                        data-aos-once="true"
                        data-aos-duration="800"
                        data-aos-delay="800"
                        data-aos-anchor="#test"
                        className="w-full font-monument font-bold md:w-4/5 mx-auto text-center text- md:text-3xl 2xl:text-4xl text-[#c8c8c8]"
                    >
                        PHOTOGRAPHER, VIDEOGRAPHER AND EDITOR
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Hero;
