import InternalLink from '../InternalLink';
import 'aos/dist/aos.css';

const text =
    'Documentary-style {photographer} and {videographer} based in {Manchester UK}, blending classic techniques with experimentation to {bring ideas and stories to life} through compelling visual imagery.';
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
        <div
            data-aos="fade-in"
            data-aos-once="true"
            data-aos-duration="800"
            className="mt-32 mb-32 md:mt-52 md:mb-48 flex flex-col items-center w-full font-light "
        >
            <div className="md:w-2/3 flex flex-col space-y-4 md:space-y-10 items-center">
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
