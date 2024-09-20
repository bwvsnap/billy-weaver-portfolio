import InternalLink from '../InternalLink';
import 'aos/dist/aos.css';

const text =
    'Hi! I’m Billy, a {documentary-style photographer} and {videographer} working mainly in {events} and {content creation}, helping brands, artists, and business owners {enhance their identity} with {compelling visual media. It all began in 2007, with a small compact camera…';
const parts = text.split(/(\{.*?\})/);

const Intro = () => {
    const renderText = () => {
        return parts.map((part, index) => {
            if (part.match(/\{.*?\}/)) {
                const boldText = part.replace(/[{}]/g, '');
                return (
                    <span key={index} className="font-semibold text-stone-100">
                        {boldText}
                    </span>
                );
            } else {
                return <span key={index}>{part}</span>;
            }
        });
    };

    return (
        <div className="max-w-screen-2xl -mt-6 mb-32 md:mt-12 flex flex-col items-center w-full font-light bg-blue-200">
            <h2
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="text-center font-monument text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 md:mb-10 w-full font-bold"
            >
                ABOUT ME
            </h2>
            <div
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="800"
                className="md:w-2/3 flex flex-col space-y-10 items-center"
            >
                <p className="text-base md:text-2xl 2xl:text-4xl md:leading-[2.4rem] 2xl:leading-[2.8rem] text-stone-400 text-center">
                    {renderText()}
                </p>
                <div>
                    <InternalLink
                        href={'/about'}
                        text={'Learn More'}
                        large={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;
