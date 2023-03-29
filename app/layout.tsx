'use client';
import './globals.css';
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import ReactGA from 'react-ga4';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const GA_MEASUREMENT_ID: string = process.env.GA_MEASUREMENT_ID as string;
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        if (pathname) {
            console.log(pathname + searchParams.toString());
            ReactGA.send({
                hitType: "pageview",
                page: pathname + searchParams.toString(),
            });
        }
    }, [pathname, searchParams]);

    return (
        <html lang="en" className="overflow-x-hidden dark">
            <body className="bg-bg antialiased font-body bg-bg leading-7 text-body">
                <Header />
                <main id="content">
                    <div className="container mx-auto px-4">
                        {children}
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    )
}
