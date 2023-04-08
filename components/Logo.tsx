'use client';
import { useEffect, useState } from 'react';

import { Status, StatusType } from '@/lib/status-page/FetchData';
import Link from 'next/link'

import { TitleFont } from './Fonts';
import { Indicator } from './status-page/Indicator';


export function Logo({ appName, url, discover }: { appName: string, url: string, discover?: boolean }) {
    const [status, setStatus] = useState<Status | null>(null);
    
    return (
        <Link href={url} className="relative">
            <div dangerouslySetInnerHTML={{ __html: appName }} className={TitleFont.className} style={{ fontWeight: 'bold' }}></div>
            {discover && <Indicator type={StatusType.OK}/>}
        </Link>
    )
}
