'use client';
import { useEffect, useState } from 'react'
import { GetStatus } from './GetData'


export function Status() {
    const [status, setStatus] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetStatus().then((data) => {
            setStatus(data);
            setLoading(false);
        });
    }, []);

    const statusJSX = () => {
        if (loading) {
            return "Loading...";
        }
        return (
            <div className="text-center">
                <span className="cursor-pointer inline-flex items-center rounded-full p-2 bg-accent text-white group transition-all duration-500 focus:outline-none" role="alert">
                    <div className="w-6 h-6"></div>

                    <span className="whitespace-nowrap inline-block group-hover:max-w-auto group-focus:max-w-screen-2xl max-w-0 scale-80 group-hover:scale-100 overflow-hidden transition-all duration-500 group-hover:px-2 group-focus:px-2">
                        {status}
                    </span>
                </span>
            </div>
        );
    };

    return (
        <>
            {statusJSX()}
        </>
    )
}