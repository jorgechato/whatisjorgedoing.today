import Link from 'next/link';

import { format } from 'date-fns'

import { ArticleMetadata } from './ArticleMetadata';
import { GetArticlesMetadata } from './FetchData';
import { Tags } from './Tags';


export function ArticleList({ limit, tag }: { limit?: number, tag?: string }) {
    const articlesMetadata: ArticleMetadata[] = GetArticlesMetadata(tag, limit);

    const articlesPreview = articlesMetadata.map((article) => {
        const date = format(new Date(article.date), 'dd LLL yyyy');

        return (
            <li key={article.slug} className="group">
                <Link href={`/${article.slug}`}>
                    <span className="font-bold decoration-[3px]
                    group-hover:decoration-accent group-hover:underline-offset-4
                    transition-all duration-200
                    underline decoration-grey-light underline-offset-1">
                        {article.title}
                    </span>
                    <time dateTime="2019-08-31T00:00:00Z" className="text-grey-darkest text-sm md:ml-2 w-full md:w-24 inline-block">
                        {date}
                    </time>
                    <p>
                        <Tags tags={article.tags} hover={false} />
                    </p>
                </Link>
            </li>
        )
    });

    return (
        <>
            <ul className="space-y-4 md:space-y-0">
                {articlesPreview}
            </ul>
        </>
    );
}
