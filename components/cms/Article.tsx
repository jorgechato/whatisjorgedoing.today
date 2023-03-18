import { format } from 'date-fns'
import Markdown from 'markdown-to-jsx';

import { GetArticleContent } from './FetchData';
import { H1Font } from '../Fonts';


export function Article(props: any) {
    const slug = props.slug;
    const article = GetArticleContent(slug);
    const date = format(new Date(article.data.date), 'dd LLL yyyy');

    return (
        <>
            <article className="container mx-auto px-4">
                <header className="mb-12">
                    <h1 className="text-3xl text-center">
                        <span className={H1Font.className}>
                            {article.data.title}
                        </span>
                    </h1>
                    <div className="container font-display text-grey-darkest mx-auto px-4 text-xs mt-24 mb-12 tracking-wide text-center">
                        {date}
                    </div>
                </header>
                <article className="prose text-justify">
                    <Markdown>
                        {article.content}
                    </Markdown>
                </article>
            </article>
        </>
    );
};
