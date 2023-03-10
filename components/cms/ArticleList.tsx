import Link from 'next/link';

import { ArticleMetadata } from './ArticleMetadata';
import { GetArticlesMetadata } from './FetchData';


export function ArticleList() {
    const articlesMetadata: ArticleMetadata[] = GetArticlesMetadata();

    const articlesPreview = articlesMetadata.map((article) => (
        <div key={article.slug}>
            <Link href={article.slug}>
                <h2>{article.title}</h2>
            </Link>
            <p>{article.summary}</p>
        </div>
    ));

    return (
        <>
            {articlesPreview}
        </>
    );
}
