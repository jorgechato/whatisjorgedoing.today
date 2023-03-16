import Link from 'next/link';

import { ArticleList } from '@/components/cms/ArticleList';
import { H1Font } from '@/components/Fonts';


export default function Home() {
    return (
        <>
            <Link href="/archive" className="text-2xl mb-4">
                <spam className={H1Font.className} style={{ fontWeight:'bold' }}>
                    <spam className="text-grey-darkest">#</spam> Archive
                </spam>
            </Link>
            <ArticleList limit="5"/>
            <Link href="/archive" className="text-grey-darkest text-sm sm:ml-2 w-full sm:w-24">
                ... More
            </Link>
        </>
    )
}
