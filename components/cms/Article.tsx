import { GetArticleContent } from './FetchData';


export function Article(props: any) {
    const slug = props.slug;
    const article = GetArticleContent(slug);

    return (
        <>
            <h1>{article.data.title}</h1>
            <h2>{article.data.date}</h2>
            <div>
            {article.content}
            </div>
        </>
    );
};
