import type { Metadata } from 'next'
import { notFound } from 'next/navigation';

import {
    Article, ArticleMetadata,
    GetArticleContent, GetArticlesMetadata
} from '@jorgechato/manyo';


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

export default function ArticlePage(props: { params: { slug: string }}) {
    const slug = props.params.slug;
    const article = Article({slug: slug});
    
    if (!article) return notFound();

    return (
        <>
        {article}
        </>
    );
};
