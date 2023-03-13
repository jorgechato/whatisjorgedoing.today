import Link from 'next/link'
import localFont from 'next/font/local';


const titleFont = localFont({
    src: [
        {
            path: './fonts/futura-medium.ttf',
            style: 'normal',
            weight: '500',
        },
        {
            path: './fonts/futura-bold-new.ttf',
            style: 'blod',
            weight: '700',
        },
    ],
});


export function Header() {
    const appName = process.env.TITLE;

    const themeSwitcher = (
        <button type="button" className="js-theme-toggle ml-auto text-current group relative leading-none" aria-label="Switch between Dark and Light mode">
            <span className="absolute transform transition duration-100 right-0 inset-y-0 block mr-2 opacity-0 group-hover:-translate-x-4 group-hover:opacity-100 pointer-events-none">
                <span className="hidden dark:block">light</span>
                <span className="dark:hidden">dark</span></span>
            <span className="block border-2 border-black hover:bg-black rounded-full w-3 h-3"></span>
        </button>
    );

    return (
        <header className="container mx-auto p-4 mt-4 mb-12 sm:mb-24 flex items-center text-sm">
            <Link href="/" className={titleFont.className} style={{ fontWeight:'bold' }}>
                <div dangerouslySetInnerHTML={{ __html: appName }}></div>
            </Link>
            {themeSwitcher}
        </header>
    )
}
