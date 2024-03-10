'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import ContactBtn from './ContactBtn';
import RollingTextLink from './RollingTextLink';

const navLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/contact', label: 'CONTACT' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full flex justify-between items-center p-9 bg-transparent">
            <Link
                href="/"
                className="font-monument text-lg md:text-2xl font-bold z-50"
                onClick={() => setIsOpen(false)}
            >
                BILLY WEAVER
            </Link>
            <div className="flex items-center z-50">
                <div className="hidden md:flex">
                    <ContactBtn />
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block z-50"
                >
                    {isOpen ? (
                        <HiOutlineX className=" text-2xl md:text-3xl " />
                    ) : (
                        <HiOutlineMenuAlt4 className=" text-2xl md:text-3xl " />
                    )}
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 fadeIn  bg-black flex flex-row justify-center items-center  z-40">
                    <div className="space-y-8 flex flex-col  justify-center   text-center text-3xl md:text-7xl font-monument font-bold">
                        {navLinks.map((link, index) => (
                            <RollingTextLink
                                key={index}
                                text={link.label}
                                href={link.href}
                            />
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
