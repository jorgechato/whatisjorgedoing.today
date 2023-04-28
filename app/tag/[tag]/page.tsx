import type { Metadata } from 'next'

import { ArticleList, ArticleMetadata, GetArticlesMetadata } from '@jorgechato/manyo';


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
            <h1 className="text-2xl mb-6 text-center font-h1 font-bold">
                <samp className='text-grey-dark'>#</samp>{tag}
            </h1>
            <ArticleList tag={tag} />
        </>
    )
}
