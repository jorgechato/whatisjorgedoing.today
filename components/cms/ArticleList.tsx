import Link from 'next/link';

import { format } from 'date-fns'

import { ArticleMetadata } from './ArticleMetadata';
import { GetArticlesMetadata } from './FetchData';


export function ArticleList(props: any) {
    const articlesMetadata: ArticleMetadata[] = GetArticlesMetadata(props.limit);

    const articlesPreview = articlesMetadata.map((article) => {
        const date = format(new Date(article.date), 'dd LLL yyyy');

        return (
            <li key={article.slug}>
                <Link href={`/${article.slug}`}>
                    <span className="font-bold border-b border-grey-darker border-dotted hover:border-none hover:bg-black hover:text-white">
                        {article.title}
                    </span>
                    <time dateTime="2019-08-31T00:00:00Z" className="text-grey-darkest text-sm sm:ml-2 w-full sm:w-24 inline-block">
                        {date}
                    </time>
                </Link>
            </li>
        )
    });

    return (
        <>
            <ul className="space-y-4 sm:space-y-0">
                {articlesPreview}
            </ul>
        </>
    );
}
