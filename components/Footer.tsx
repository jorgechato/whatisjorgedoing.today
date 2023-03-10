import Link from 'next/link'


export function Footer() {
    const socials = process.env.SOCIALS.map((social) => (
        <li key={social.name}>
            <Link href={social.url} className="text-grey-darkest">
                {social.name}
            </Link>
        </li>
    ));
    const siteMap = process.env.SITE_MAP.map((endpoint) => (
        <li key={endpoint.name}>
            <Link href={endpoint.url} className="text-grey-darkest">
                {endpoint.name}
            </Link>
        </li>
    ));
    const year = new Date().getFullYear();
    const author = process.env.npm_package_author_name;

    return (
        <>
            <footer className="container font-display text-grey-darkest mx-auto px-4 text-xs mt-24 mb-12 tracking-wide text-center">
                <nav className="w-full mb-4">
                    <ul className="flex justify-center tracking-wide space-x-4 mb-2">
                        {siteMap}
                    </ul>
                    <ul className="flex justify-center tracking-wide space-x-4">
                        {socials}
                    </ul>
                </nav>
                <p>©{year} Jorge Chato</p>
            </footer>
        </>
    )
}
