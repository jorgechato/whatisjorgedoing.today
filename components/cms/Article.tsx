import { GetArticleContent } from './FetchData';


export function Article(props: any) {
    const slug = props.slug;
    const content = GetArticleContent(slug);

    return (
        <>
            <h1>{slug}</h1>
            <div>
            {content}
            </div>
        </>
    );
};
