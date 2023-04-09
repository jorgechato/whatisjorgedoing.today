'use client';
import { useEffect, useState } from 'react';

import { GetStatus, Status, StatusType } from '@/lib/status-page/FetchData';
import { Indicator } from './Indicator';
import { Logo } from '../Logo';


export function Project({ url, name }: { url: string, name: string }) {
    const [status, setStatus] = useState<Status>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        GetStatus(url, name).then((status: Status) => {
            setStatus(status);
            setLoading(false);
        });
    }, []);

    const card = (status: Status) => {
        let baseUrl: string;
        try {
            baseUrl = new URL(status.url).origin;
        } catch (_) { baseUrl = "/" }

        return (
            <Logo url={baseUrl} appName={status.name}>
                <div className='relative text-xs text-grey-dark border border-grey-light rounded-md p-4 m-4 select-none'>
                    <p className='text-grey-darker absolute -top-2 left-1/2 transform -translate-x-1/2 bg-bg px-2'>
                        {status.version}
                    </p>
                    <div className='absolute -top-1 -left-1'>
                        <Indicator type={status.type} />
                    </div>
                    Watching:
                    <p className="font-bold text-grey-darker">{status.watching}</p>
                </div>
            </Logo>
        );
    };

    return (
        <>
            <div className="m-4 transition duration-500 hover:scale-110">
                {loading && card({ url: url, watching: url, name: name, type: StatusType.UNKNOWN })}
                {!loading && status && card(status)}
            </div>
        </>
    );
}