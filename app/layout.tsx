import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Navbar';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Nguyễn Phúc Hậu',
    description: 'Portfolio of Nguyễn Phúc Hậu',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1150px] mx-auto`}
                style={{
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-text)',
                }}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
