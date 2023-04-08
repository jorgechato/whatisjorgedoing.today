'use client';
import { useEffect, useState } from 'react';

import { Status, StatusType } from '@/lib/status-page/FetchData';
import { Indicator } from './Indicator';
import { Logo } from '../Logo';


export function Project({ url, name }: { url: string, name: string }) {
    const [status, setStatus] = useState<Status>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
    }, []);

    return (
        <>
            {loading &&
                <Logo url={url} appName={name}>
                    <Indicator type={StatusType.UNKNOWN} />
                </Logo>
            }

            {!loading && status &&
                <Logo url={status.url} appName={status.name}>
                    <Indicator type={status.type} />
                </Logo>
            }
        </>
    );
}