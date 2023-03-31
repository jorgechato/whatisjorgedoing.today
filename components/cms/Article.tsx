import { notFound } from 'next/navigation';

import { format } from 'date-fns'
import Markdown from 'markdown-to-jsx';
import Toc from "react-toc";

import { GetArticleContent } from './FetchData';
import { H1Font } from '../Fonts';


export function Article(props: any) {
    const { slug } = props;
    const article = GetArticleContent(slug);

    if (!article) return notFound();

    const date = format(new Date(article.data.date), 'dd LLL yyyy');

    return (
        <>
            <article className="container mx-auto px-4">
                <header className="mb-12">
                    <h1 className={`text-3xl text-center ${H1Font.className}`}>
                        {article.data.title}
                    </h1>
                    <div className="container font-display text-grey-darkest mx-auto px-4 text-xs mt-14 mb-12 tracking-wide text-center">
                        {date}
                    </div>
                </header>
                <article className="prose text-justify text-base">
                    {
                        article.data.toc && (
                            <>
                                <h2>
                                    Table of Contents
                                </h2>
                                <Toc markdownText={article.content} />
                                <hr />
                            </>
                        )
                    }
                    <Markdown>
                        {article.content}
                    </Markdown>
                </article>
            </article>
        </>
    );
};
