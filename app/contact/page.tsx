import ExternalLink from '../components/ExternalLink';
import ContactForm from '../components/ContactForm';
import UnderlineLink from '../components/UnderlineLink';
import { MdArrowOutward } from 'react-icons/md';

export default async function ContactPage() {
    return (
        <div className="pt-[160px] max-w-screen-2xl px-6 md:px-9 w-full xl:w-[72%] flex flex-col items-center mb-16 md:mb-32">
            <div className="flex flex-row w-full justify-between items-center mb-12 md:mb-20">
                <h1 className=" w-full  lg:px-0  font-monument font-bold text-2xl md:text-6xl md:leading-[70px] xl:text-7xl xl:leading-[80px] ">
                    LET&apos;S WORK
                    <br />
                    <span className="2xl:ml-64">TOGETHER</span>
                </h1>

                <div>
                    <MdArrowOutward className="rotate-180 text-5xl md:text-9xl md:mr-10" />
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row w-full   md:items-start md:space-x-36">
                <ContactForm />
                <div className="hidden md:flex flex-col mb-12 md:mb-0 md:w-auto justify-start space-y-10 md:space-y-14">
                    <div className="flex flex-col justify-start">
                        <h3 className="mb-3 text-stone-400 text-sm">
                            CONTACT DETAILS
                        </h3>
                        <ul className="flex flex-col gap-2 md:gap-3 justify-start">
                            <li>
                                <UnderlineLink href="mailto:info@billyweaver.co.uk">
                                    info@billyweaver.co.uk
                                </UnderlineLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start ">
                        <h4 className="text-stone-400  mb-3 text-sm">
                            SOCIALS
                        </h4>
                        <div className="mb-8 flex flex-row md:flex-col gap-2 md:gap-4">
                            <ExternalLink
                                href="https://www.instagram.com/billyweavervisuals/"
                                text="Instagram"
                                large={false}
                            />
                            <ExternalLink href="/" text="Vimeo" large={false} />
                            <ExternalLink
                                href="https://www.linkedin.com/in/billy-weaver-049934152/"
                                text="LinkedIn"
                                large={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
