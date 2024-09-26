import 'aos/dist/aos.css';
import InternalLink from '../InternalLink';

const Hero = () => {
    return (
        <div
            id="hero"
            className="max-w-screen-2xl w-full h-screen flex flex-col items-center justify-center  relative"
        >
            <div className="relative flex flex-col z-10 justify-center items-center w-[20rem] md:w-[33rem] xl:w-[64rem] 2xl:w-[85rem] my-auto space-y-3">
                <div
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="800"
                    data-aos-anchor="#hero"
                    className="w-full relative z-10"
                >
                    <h1 className="w-full flex flex-row justify-between text-center font-monument text-stone-100 drop-shadow-2xl font-bold text-3xl md:text-5xl xl:text-8xl 2xl:text-9xl text-stroke-hover transition-all duration-1000 ease-in cursor-default">
                        <span>BILLY</span> <span>WEAVER</span>
                    </h1>
                </div>
                <h2
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-duration="800"
                    data-aos-delay="800"
                    data-aos-anchor="#hero"
                    className="w-full flex flex-col md:flex-row justify-between xl:px-1 2xl:px-[0.3rem] text-stone-100  drop-shadow-2xl  font-monument font-bold text-center text-xs md:text-xs xl:text-2xl 2xl:text-[2rem]"
                >
                    <span className="block md:hidden">
                        PHOTOGRAPHER, VIDEOGRAPHER
                    </span>{' '}
                    <span className="block md:hidden"></span>{' '}
                    <span className="hidden md:block">PHOTOGRAPHER</span>{' '}
                    <span className="hidden md:block">|</span>
                    <span className="hidden md:block">VIDEOGRAPHER</span>
                    <span className="hidden md:block">|</span>
                    <span className="hidden md:block"></span>
                </h2>
                <div
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-duration="800"
                    data-aos-delay="1100"
                    data-aos-anchor="#hero"
                    className="w-full flex flex-row justify-center pt-3 z-10"
                >
                    <InternalLink
                        href={'/portfolio'}
                        text={'See My Work'}
                        large={true}
                    />
                </div>{' '}
            </div>
        </div>
    );
};

export default Hero;
