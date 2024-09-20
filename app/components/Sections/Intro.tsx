import InternalLink from '../InternalLink';
import 'aos/dist/aos.css';

const Intro = () => {
    return (
        <div className="max-w-screen-2xl -mt-6 mb-32 md:mt-12 flex flex-col items-center w-full font-light space-y-10">
            <h2
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="text-center font-monument text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl w-full font-bold"
            >
                ABOUT ME
            </h2>

            <p
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="md:w-3/4 2xl:w-4/5 text-base md:text-2xl 2xl:text-4xl md:leading-[2.4rem] 2xl:leading-[2.8rem] text-stone-400 text-center"
            >
                Hi! I’m Billy, a{' '}
                <span className="font-semibold text-stone-100">
                    documentary-style photographer
                </span>{' '}
                and{' '}
                <span className="font-semibold text-stone-100">
                    videographer
                </span>{' '}
                working mainly in{' '}
                <span className="font-semibold text-stone-100">events</span> and{' '}
                <span className="font-semibold text-stone-100">
                    content-creation
                </span>{' '}
                , helping brands, artists, and business owners{' '}
                <span className="font-semibold text-stone-100">
                    enahance their identity
                </span>{' '}
                with{' '}
                <span className="font-semibold text-stone-100">
                    compelling visual media
                </span>{' '}
                . It all began in 2007, with a small compact camera…
            </p>
            <div
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="pt-2"
            >
                <InternalLink
                    href={'/about'}
                    text={'Learn More'}
                    large={true}
                />
            </div>
        </div>
    );
};

export default Intro;
