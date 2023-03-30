import type { Metadata } from 'next'

import { Article } from '@/components/cms/Article';
import { GetArticlesMetadata, GetArticleContent } from '@/components/cms/FetchData';
import { ArticleMetadata } from '@/components/cms/ArticleMetadata';


export const generateStaticParams = async (): Promise<any[]> => {
    const articlesMetadata: ArticleMetadata[] = GetArticlesMetadata();
    return articlesMetadata.map((article: ArticleMetadata) => ({
        slug: article.slug,
    }));
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
    const article = GetArticleContent(params.slug);

    if (!article) return { title: "Article not found!" };

    const articleMetadata: ArticleMetadata = article.data as ArticleMetadata;
    return { title: articleMetadata.title }
}

export default function ArticlePage(props: any) {
    const slug = props.params.slug;

    return (
        <>
            <Article slug={slug} />
        </>
    );
};
