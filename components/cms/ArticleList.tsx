import Link from 'next/link';

import { ArticleMetadata } from './ArticleMetadata';
import { GetArticlesMetadata } from './FetchData';


export function ArticleList() {
    const articlesMetadata: ArticleMetadata[] = GetArticlesMetadata();

    const articlesPreview = articlesMetadata.map((article) => (
        <li key={article.slug}>
            <Link href={article.slug}>
                <span className="border-b border-grey-darker border-dotted hover:border-none hover:bg-black hover:text-white">
                    {article.title}
                </span>
                <time dateTime="2019-08-31T00:00:00Z" className="text-grey-darkest text-sm sm:ml-2 w-full sm:w-24 inline-block">
                    Aug 31, 2019
                </time>
            <div className="text-grey-darkest text-sm">
                {article.summary}
            </div>
            </Link>
        </li>
    ));

    return (
        <>
            <ul className="space-y-4 sm:space-y-0">
                {articlesPreview}
            </ul>
        </>
    );
}
