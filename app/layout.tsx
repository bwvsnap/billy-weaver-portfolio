import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';

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
                className={`${inter.className} ${monument.variable} bg-black text-gray-100 `}
            >
                <Navbar />
                <main className=""> {children}</main>
            </body>
        </html>
    );
}
