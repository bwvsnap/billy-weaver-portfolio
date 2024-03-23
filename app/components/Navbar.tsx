'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import ContactBtn from './ContactBtn';
import NavLink from './NavLink';
import styles from './Navbar.module.css';

const navLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/contact', label: 'CONTACT' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [textDelay, setTextDelay] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

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
            const timer = setTimeout(() => {
                setTextDelay(true);
            }, 800);

            return () => clearTimeout(timer);
        } else {
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
                className={`fixed w-screen left-0 h-36 pointer-events-none top-0 z-0 ${
                    styles.overlayGradient
                } ${
                    scrollPosition > 0
                        ? styles.overlayFadeIn
                        : styles.overlayFadeOut
                }`}
            ></div>
                isOpen ? '' : 'pointer-events-none'
            }`}
        >
            <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-monument text-lg md:text-2xl font-bold z-50 cursor-pointer pointer-events-auto"
            >
                BILLY WEAVER
            </Link>
            <div className="flex items-center z-50">
                <div className="hidden md:flex pointer-events-auto">
                    <ContactBtn />
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block z-50 pointer-events-auto"
                >
                    {isOpen ? (
                        <HiOutlineX className="text-2xl md:text-3xl" />
                    ) : (
                        <HiOutlineMenuAlt4 className="text-2xl md:text-3xl" />
                    )}
                </button>
            </div>
            <div
                className={`${styles.navMenu} ${
                    isOpen ? styles.open : ''
                } fixed inset-0 h-screen bg-black flex flex-row justify-center items-center z-40 `}
            >
                <div className="space-y-8 flex flex-col justify-center text-center text-3xl md:text-7xl font-monument font-bold">
                    {navLinks.map((link, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick()}
                            className={`${styles.linkContainer}  cursor-pointer`}
                        >
                            <NavLink
                                text={link.label}
                                href={link.href}
                                delay={textDelay}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
