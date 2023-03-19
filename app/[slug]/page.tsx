import type { Metadata } from 'next'
import { Article } from '@/components/cms/Article';
import { GetArticlesMetadata, GetArticleMetadata } from '@/components/cms/FetchData';
import { ArticleMetadata } from '@/components/cms/ArticleMetadata';


export const generateStaticParams = async (): Promise<any[]> => {
    const articlesMetadata: ArticleMetadata[] = GetArticlesMetadata();
    return articlesMetadata.map((article: ArticleMetadata) => ({
        slug: article.slug,
    }));
};

export const generateMetadata = async ({ params }): Promise<Metadata> => {
    const article: ArticleMetadata = await GetArticleMetadata(params.slug);
    return { title: article.title }
}

export default function ArticlePage(props: any) {
    const slug = props.params.slug;

    return (
        <>
            <Article slug={slug}/>
        </>
    );
};
