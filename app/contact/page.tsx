import Link from 'next/link';
import ExternalLink from '../components/ExternalLink';
import ContactForm from '../components/ContactForm';

export default async function ContactPage() {
    return (
        <div className="pt-[160px] md:pt-[160px] px-3 md:px-9 w-full flex flex-col items-center mb-60">
            <h1 className="mb-8 w-full px-3 md:px-0 md:w-2/3 font-monument font-bold text-2xl md:text-6xl md:leading-[70px] xl:text-7xl xl:leading-[80px] text-center">
                LET&apos;S WORK TOGETHER
            </h1>

            <h2 className="w-full px-3 md:px-0 md:w-2/3  text-center mb-14 text-sm md:text-xl font-light ">
                Ready to capture your next moment? Connect with me to discuss
                your project, request a quote, or simply drop by to say hello!
            </h2>
            <ContactForm />
        </div>
    );
}
