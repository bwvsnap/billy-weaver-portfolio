import InternalLink from '../InternalLink'; // Ensure this is the correct path to your InternalLink component

const text =
    'Lorem, ipsum {dolor sit amet} consectetur adipisicing elit. Accusantium ut aperiam ea {corporis eius}. Rerum rem ad {consectetur officiis} beatae molestias vel ea. Laboriosam adipisci quisquam, pariatur tempore fugit atque.';
const parts = text.split(/(\{.*?\})/);

const Intro = () => {
    const renderText = () => {
        return parts.map((part, index) => {
            if (part.match(/\{.*?\}/)) {
                const boldText = part.replace(/[{}]/g, '');
                return (
                    <span key={index} className="font-semibold text-gray-100">
                        {boldText}
                    </span>
                );
            } else {
                return <span key={index}>{part}</span>;
            }
        });
    };

    return (
        <div className="mt-32 mb-32 md:mt-64 md:mb-48 flex flex-col items-center w-full font-light ">
            <div className="md:w-2/3 flex flex-col space-y-4 md:space-y-10 items-center">
                <p className="md:text-4xl  md:leading-[3rem] text-stone-400 text-center">
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
