import Link from 'next/link';

import { RepositoryList, ArticleList } from '@jorgechato/manyo';


export const metadata = {
    title: 'What is Jorge really doing today?',
};

export default function Home() {
    return (
        <>
            <div className="text-xl mb-4 font-bold font-h1">
                <span className="text-grey-dark">#</span>Projects
            </div>
            <RepositoryList />

            <Link href="/archive">
                <div className="text-xl font-bold font-h1 my-4">
                    <span className="text-grey-dark">#</span>Archive
                </div>
            </Link>
            <ArticleList limit={5} />
            <Link href="/archive">
                <span className="text-grey-darkest text-sm sm:ml-2 w-full sm:w-24">
                    ... More
                </span>
            </Link>
        </>
    )
}
