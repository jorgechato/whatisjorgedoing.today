import { Article } from '@/components/cms/Article';
import { GetArticlesMetadata } from '@/components/cms/FetchData';
import { ArticleMetadata } from '@/components/cms/ArticleMetadata';


export const generateStaticParams = async () => {
    const articlesMetadata: ArticleMetadata[] = GetArticlesMetadata();
    return articlesMetadata.map((article: ArticleMetadata) => ({slug: article.slug}));
};

export default function ArticlePage(props: any) {
    const slug = props.params.slug;

    return (
        <>
            <Article slug={slug}/>
        </>
    );
};
