'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavLink, ShopNavLink } from './NavLink';
import styles from './Navbar.module.css';
import InternalLink from './InternalLink';
import MenuBtn from './MenuBtn';
import ExternalLink from './ExternalLink';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/contact', label: 'CONTACT' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [textDelay, setTextDelay] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
            const timer = setTimeout(() => {
                setTextDelay(true);
            }, 800);

            return () => clearTimeout(timer);
        } else {
            document.body.classList.remove('overflow-hidden');
            setTextDelay(false);
        }
    }, [isOpen]);

    const handleClick = () => {
        if (window.innerWidth <= 640) {
            setTimeout(() => {
                setIsOpen(false);
            }, 200);
        } else {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div
                className={`fixed w-screen left-0 h-36 pointer-events-none top-0 z-[49] transition duration-1000 ${
                    styles.overlayGradient
                } ${scrollPosition > 0 ? 'opacity-80' : 'opacity-0'}`}
            ></div>
            <nav
                className={`fixed w-full flex justify-between items-center px-5 py-9 md:p-9 bg-transparent z-50 ${
                    isOpen ? '' : 'pointer-events-none'
                }`}
            >
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="hover:scale-95 duration-300 font-monument text-lg md:text-2xl font-bold z-50 cursor-pointer pointer-events-auto transition "
                >
                    <h3
                        className={`transition duration-1000 ${
                            scrollPosition < 500 && !isOpen && pathname == '/'
                                ? 'opacity-0'
                                : 'opacity-100'
                        } `}
                    >
                        <span className="md:hidden">BW</span>
                        <span className="hidden md:inline">BILLY WEAVER</span>
                    </h3>
                </Link>

                <div className="flex items-center z-50 pointer-events-auto">
                    {pathname !== '/contact' && (
                        <>
                            <div
                                className="hidden md:flex mr-5"
                                onClick={() => setIsOpen(false)}
                            >
                                <InternalLink
                                    href="/contact"
                                    text="Let's Talk"
                                    large={false}
                                />
                            </div>
                        </>
                    )}

                    <MenuBtn
                        isOpen={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
                <div
                    className={`${styles.navMenu} ${
                        isOpen ? styles.open : ''
                    } fixed inset-0 h-screen bg-[#0b0b0b] flex flex-col justify-between items-center z-40 `}
                >
                    <div className="space-y-8 my-auto pt-20 flex flex-col justify-center text-center text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-monument font-bold">
                        {navLinks.map((link, index) => (
                            <div
                                key={index}
                                onClick={() => handleClick()}
                                className={`${styles.linkContainer} cursor-pointer`}
                            >
                                <NavLink
                                    text={link.label}
                                    href={link.href}
                                    delay={textDelay}
                                />
                            </div>
                        ))}
                        <div
                            onClick={() => handleClick()}
                            className={`${styles.linkContainer} cursor-pointer`}
                        >
                            <ShopNavLink
                                text="SHOP"
                                href="/shop"
                                delay={textDelay}
                            />
                        </div>
                    </div>
                    <div
                        className={`${
                            textDelay
                                ? styles.externalLinkFadeIn
                                : styles.externalLinkFadeOut
                        } flex flex-col md:flex-row-reverse w-full px-1 md:px-9 space-y-10 justify-between items-center md:items-end mb-[100px] md:mb-4`}
                    >
                        <div className="flex flex-row gap-3 md:gap-4 flex-wrap justify-center md:justify-end items-center">
                            <ExternalLink
                                href="https://www.instagram.com/billyweavervisuals/"
                                text="Instagram"
                                large={false}
                            />
                            <ExternalLink
                                href="https://vimeo.com/user39452377"
                                text="Vimeo"
                                large={false}
                            />

                            <ExternalLink
                                href="https://www.linkedin.com/in/billy-weaver-049934152/"
                                text="LinkedIn"
                                large={false}
                            />
                        </div>

                        <p className="text-stone-400 text-center md:text-start text-sm md:text-base">
                            © {new Date().getFullYear()} Billy Weaver /{' '}
                            <Link
                                className="hover:text-stone-100 transition-colors duration-300"
                                href={'http://www.roryholmes.co.uk'}
                            >
                                Website by Rory Holmes
                            </Link>
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
