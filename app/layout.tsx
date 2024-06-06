import type { Metadata } from 'next';
import { Inter, Noto_Sans_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Sections/Footer';
import { AosInit } from './components/AosInit';

const inter = Inter({ subsets: ['latin'] });

const noto = Noto_Sans_Mono({ subsets: ['latin'] });

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
        'Billy Weaver professional photography, videography & editing services'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className}  ${monument.variable} dark bg-[#0b0b0b] text-gray-100 font-light tracking-wide `}
            >
                <AosInit />
                <Navbar />
                <main className=""> {children}</main>
                <hr className="h-px my-8 bg-gray-100/10 border-0 " />
                <Footer />
            </body>
        </html>
    );
}
