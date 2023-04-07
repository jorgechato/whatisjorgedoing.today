'use client';
import { useEffect } from 'react';

import { ThemeButton } from './ThemeButton';
import { RegisterLanguages } from './git/RegisterLanguages';
import { Logo } from './Logo';

const config: { [key: string]: any } = require('@/my.config.js');


export function Header() {
    const appName = config.TITLE || '';

    useEffect(() => {
        RegisterLanguages();
    }, []);

    return (
        <header className="container mx-auto p-4 mt-4 mb-12 sm:mb-24 flex items-center text-sm">
            <Logo url="/" appName={appName} />
            <ThemeButton />
        </header>
    )
}
