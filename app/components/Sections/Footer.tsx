'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import ExternalLink from '../ExternalLink';
import UnderlineLink from '../UnderlineLink';
import BackToTop from '../BackToTop';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const buttonContainerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const buttonContainer = buttonContainerRef.current;
        const textElement = textRef.current;
        const arrowElement = arrowRef.current;

        if (!buttonContainer || !textElement || !arrowElement) return;

        const spanElement = buttonContainer.querySelector('span');

        const handleScroll = () => {
            if (
                !buttonContainer ||
                !spanElement ||
                !textElement ||
                !arrowElement
            )
                return;

            const buttonRect = buttonContainer.getBoundingClientRect();
            const textRect = textElement.getBoundingClientRect();
            const arrowRect = arrowElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate the midpoint between the right edge of text and the left edge of the arrow
            const finalPosX = 0.57 * textRect.right + 0.43 * arrowRect.left;
            const maxTranslateX = finalPosX - window.innerWidth / 2;

            // Calculate progress: 0 when button top hits bottom of viewport, 1 when button bottom hits bottom of viewport
            let progress =
                (viewportHeight - buttonRect.top) / buttonRect.height / 1.8;

            // Clamp the progress value between 0 and 1
            const clampedProgress = Math.max(0, Math.min(progress, 1));

            // Calculate translateX value up to the midpointX
            const translateX = clampedProgress * maxTranslateX;

            buttonContainer.style.transform = `translateX(${translateX}px)`;

            // Add class when the button reaches the max position
            if (clampedProgress >= 1) {
                spanElement.classList.add('animate-spin-slow');
            } else {
                spanElement.classList.remove('animate-spin-slow');
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    window.addEventListener('scroll', handleScroll);
                    handleScroll(); // Call once to set initial position
                } else {
                    window.removeEventListener('scroll', handleScroll);
                }
            },
            {
                threshold: [0, 1]
            }
        );

        observer.observe(buttonContainer);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, [pathname]);

    return (
        <>
            <hr className="h-px my-8 w-full bg-stone-100/20 border-0" />
            <div className="w-full max-w-screen-2xl px-2 md:px-10 flex flex-col items-center ">
                {pathname !== '/contact' && (
                    <>
                        <div className="flex flex-row w-full justify-between items-start  mb-7  md:mb-14 p-2 lg:p-0">
                            <h3
                                className="font-monument font-bold text-2xl md:text-5xl lg:text-6xl xl:text-7xl"
                                ref={textRef}
                            >
                                LET&apos;S WORK
                                <br />
                                <span className="lg:ml-64">TOGETHER</span>
                            </h3>
                            <div ref={arrowRef}>
                                <MdArrowOutward className="rotate-180 text-4xl md:text-9xl md:mr-10 mt-5" />
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-center mb-10 md:mb-24 relative">
                            <hr className="h-px my-8 bg-stone-100/20 border-0 w-full mx-3 md:mx-0 md:w-full" />
                            <div className="absolute" ref={buttonContainerRef}>
                                <Link
                                    className="h-[8.5rem] w-[8.5rem] md:w-44 md:h-44 rounded-full bg-[#EE6E31] hover:scale-90 transition-all duration-500 flex items-center justify-center"
                                    href={'/contact'}
                                >
                                    <span className="text-center text-sm md:text-xl font-normal text-[#0b0b0b]">
                                        Get In Touch
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </>
                )}

                <div className="flex flex-col lg:flex-row  w-4/5 lg:w-full mb-4 lg:mb-14 justify-between space-y-10 lg:space-y-0">
                    <div className="flex flex-col items-start">
                        <h4 className="mb-3 text-stone-400 text-sm">CONTACT</h4>
                        <ul className="flex flex-col gap-2 md:gap-3 justify-start">
                            <li>
                                <UnderlineLink href="mailto:info@billyweaver.co.uk">
                                    info@billyweaver.co.uk
                                </UnderlineLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h4 className="mb-3 text-stone-400 text-sm">
                            NAVIGATION
                        </h4>
                        <ul className="grid lg:grid-rows-2 gap-2 md:gap-3 grid-flow-col">
                            <li>
                                <UnderlineLink href="/">Home</UnderlineLink>
                            </li>
                            <li>
                                <UnderlineLink href="/about">
                                    About
                                </UnderlineLink>
                            </li>
                            <li>
                                <UnderlineLink href="/portfolio">
                                    Portfolio
                                </UnderlineLink>
                            </li>
                            <li>
                                <UnderlineLink href="/contact">
                                    Contact
                                </UnderlineLink>
                            </li>
                            <li>
                                <UnderlineLink href="/shop">Shop</UnderlineLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h4 className="text-stone-400 lg:pl-3 mb-3 text-sm">
                            SOCIALS
                        </h4>
                        <div className="mb-8 flex flex-row gap-2 md:gap-3">
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
                <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between p-2 lg:p-0 gap-8 mb-8">
                    <p className="text-stone-400 text-center text-sm md:text-base lg:text-start">
                        © 2024 Billy Weaver /{' '}
                        <Link
                            className="hover:text-stone-100 transition-colors duration-300"
                            href={'http://www.roryholmes.com'}
                        >
                            Website by Rory Holmes
                        </Link>
                    </p>
                    <BackToTop />
                </div>
            </div>
        </>
    );
};

export default Footer;
