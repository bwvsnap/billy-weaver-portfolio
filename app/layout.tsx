import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Sections/Footer';
import { AosInit } from './components/AosInit';

const inter = Inter({ subsets: ['latin'] });

const monument = localFont({
    src: [
        {
            path: '../public/fonts/MonumentExtended/PPMonumentExtended-Light.otf',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../public/fonts/MonumentExtended/PPMonumentExtended-Regular.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/fonts/MonumentExtended/PPMonumentExtended-Black.otf',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-monument'
});

export const metadata: Metadata = {
    title: 'Billy Weaver',
    description:
        'Billy Weaver - professional photography, videography, sound & editing services'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className}  ${monument.variable} w-full dark bg-[#0b0b0b] text-stone-100 font-light tracking-wide flex flex-col items-center`}
            >
                <AosInit />
                <Navbar />
                <main className="w-full"> {children}</main>
                <Footer />
            </body>
        </html>
    );
}
