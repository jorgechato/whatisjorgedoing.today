import { Article } from '@/components/cms/Article';


export default function ArticlePage(props: any) {
    const slug = props.params.slug;

    return (
        <>
            <Article slug={slug}/>
        </>
    );
};
