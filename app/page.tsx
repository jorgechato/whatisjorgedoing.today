import Link from 'next/link';

import { ArticleList } from '@/components/cms/ArticleList';
import { H1Font } from '@/components/Fonts';


export const metadata = {
    title: 'What is Jorge really doing today?',
};

export default function Home() {
    return (
        <>
            <Link href="/archive">
                <span className={`text-2xl mb-4 ${H1Font.className}`} style={{ fontWeight:'bold' }}>
                    <span className="text-grey-darkest">#</span> Archive
                </span>
            </Link>
            <ArticleList limit="5"/>
            <Link href="/archive">
                <span className="text-grey-darkest text-sm sm:ml-2 w-full sm:w-24">
                    ... More
                </span>
            </Link>
        </>
    )
}
