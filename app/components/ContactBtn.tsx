import React, { useState } from 'react';
import Link from 'next/link';

const ContactBtn = () => {
    return (
        <Link
            href="/contact"
            className="w-30 p-1 px-4 mx-6 text-md  rounded-3xl bg-gray-100 text-black"
        >
            Let&apos;s talk
        </Link>
    );
};

export default ContactBtn;
