'use client';
import { useEffect, useState } from 'react';

import Markdown from 'markdown-to-jsx';
const emoji = require('emoji-dictionary');

import { GetReadme } from "@/components/git/FetchData";
import { FileSkeleton } from "./ReadmeSkeleton";


export default function Readme() {
    const [readme, setReadme] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetReadme().then((data) => {
            data = data.replace(/:\w+:/gi, (name: string) => emoji.getUnicode(name));
            setReadme(data)
            setLoading(false)
        });
    }, []);

    return (
        <article className="prose text-justify text-base">
            {loading && <FileSkeleton/>}

            {!loading && <Markdown>{readme}</Markdown>}
        </article>
    )
}
