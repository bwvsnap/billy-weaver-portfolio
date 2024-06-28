import 'aos/dist/aos.css';

const Hero = () => {
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
                    className="my-auto mx-auto  "
                >
                    <h1 className="text-center font-monument font-bold text-5xl md:text-9xl 2xl:text-9xl text-stroke-hover transition-all duration-1000 ease-in cursor-default">
                        BILLY
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Hero;
