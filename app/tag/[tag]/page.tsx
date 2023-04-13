import type { Metadata } from 'next'

import { ArticleList } from '@/components/cms/ArticleList';
import { H1Font } from '@/components/Fonts';
import { GetArticlesMetadata } from '@/components/cms/FetchData';
import { ArticleMetadata } from '@/components/cms/ArticleMetadata';


export const generateStaticParams = async (): Promise<any[]> => {
    const articlesMetadata: ArticleMetadata[] = GetArticlesMetadata();
    return articlesMetadata.map((article: ArticleMetadata) => (
        article.tags.map((tag: string) => ({ tag: tag }))
    )).flat();
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
    return { title: '#' + params.tag }
}

export default function Home(props: any) {
    const tag = props.params.tag;

    return (
        <>
            <h1 className={`text-2xl mb-6 text-center ${H1Font.className}`} style={{ fontWeight: 'bold' }}>
                <samp className='text-grey-dark'>#</samp>{tag}
            </h1>
            <ArticleList tag={tag} />
        </>
    )
}
