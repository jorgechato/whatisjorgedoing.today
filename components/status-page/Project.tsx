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
                <div>
                    {status.description &&
                        <blockquote className="justify-center text-xs italic font-semibold">
                            <svg aria-hidden="true" className="inline-block align-top w-3 h-3 mr-1 text-grey-dark" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                            <div className='inline-block align-top text-grey-darker
                            w-max max-w-[80%] text-ellipsis overflow-hidden whitespace-nowrap'>
                                {status.description}
                            </div>
                        </blockquote>
                    }
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
                </div>
            </Logo>
        );
    };

    return (
        <>
            <div className="group m-4 transition duration-500 hover:scale-110">
                {loading && card({ url: url, watching: url, name: name, type: StatusType.UNKNOWN })}
                {!loading && status && card(status)}
            </div>
        </>
    );
}