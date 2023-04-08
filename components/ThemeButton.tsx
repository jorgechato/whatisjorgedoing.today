'use client';
import { useEffect } from 'react';


function setInitialTheme(isDarkMode: boolean) {
    const root = document.documentElement;
    root.classList.remove(isDarkMode ? 'light' : 'dark');
    root.classList.add(isDarkMode ? 'dark' : 'light');

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    themeColorMeta?.setAttribute('content', isDarkMode ? '#000' : '#fff');
}


export function ThemeButton() {
    useEffect(() => {
        const isDarkMode = localStorage.getItem('theme') === 'dark';

        setInitialTheme(isDarkMode);
    }, []);

    const handleToggle = () => {
        const isDarkMode = localStorage.getItem('theme') === 'dark';

        setInitialTheme(!isDarkMode);
    };

    return (
        <button
            type="button"
            className="js-theme-toggle ml-auto text-current group relative leading-none"
            aria-label="Switch between Dark and Light mode"
            onClick={handleToggle}
        >
            <span
                className="absolute transform transition duration-100 right-0 inset-y-0 block mr-2 opacity-0 group-hover:-translate-x-4 group-hover:opacity-100 pointer-events-none"
            >
                <span className="hidden dark:block">light</span>
                <span className="dark:hidden">dark</span>
            </span>
            <span
                className="block border-2 border-black hover:bg-black rounded-full w-3 h-3"
            ></span>
        </button>
    )
}

