import Link from 'next/link'

import { TitleFont } from './Fonts';


export function Logo({ appName, url, children }: { appName: string, url: string, children?: any}) {
    
    return (
        <Link href={url} className="relative">
            <div dangerouslySetInnerHTML={{ __html: appName }} className={TitleFont.className} style={{ fontWeight: 'bold' }}></div>
            {children}
        </Link>
    )
}
