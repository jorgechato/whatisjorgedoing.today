'use client';
import Link from 'next/link'

import { TitleFont } from './Fonts';
import { ThemeButton } from './ThemeButton';


export function Header() {
    const appName = process.env.TITLE;

    return (
        <header className="container mx-auto p-4 mt-4 mb-12 sm:mb-24 flex items-center text-sm">
            <Link href="/" className={TitleFont.className} style={{ fontWeight:'bold' }}>
                <div dangerouslySetInnerHTML={{ __html: appName }}></div>
            </Link>
            <ThemeButton/>
        </header>
    )
}
