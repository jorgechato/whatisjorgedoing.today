'use client';
import Link from 'next/link'
import { useEffect } from 'react';

import { TitleFont } from './Fonts';
import { ThemeButton } from './ThemeButton';
import { RegisterLanguages } from './git/RegisterLanguages';

const config: { [key: string]: any } = require('@/my.config.js');


export function Header() {
    const appName = config.TITLE || '';

  useEffect(() => {
        RegisterLanguages();
  }, []);

    return (
        <header className="container mx-auto p-4 mt-4 mb-12 sm:mb-24 flex items-center text-sm">
            <Link href="/">
                <div dangerouslySetInnerHTML={{ __html: appName }} className={TitleFont.className} style={{ fontWeight: 'bold' }}></div>
            </Link>
            <ThemeButton />
        </header>
    )
}
