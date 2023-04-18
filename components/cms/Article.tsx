import { notFound } from 'next/navigation';

import { format } from 'date-fns'
import Markdown from 'markdown-to-jsx';
import Toc from "react-toc";
import readingTime from 'reading-time';

import { GetArticleContent } from './FetchData';
import { H1Font } from '../Fonts';
import { CodeBlock } from '../git/CodeBlock';
import { Tags } from './Tags';


export function Article({ slug }: { slug: string }) {
    const article = GetArticleContent(slug);

    if (!article) return notFound();

    const date = format(new Date(article.data.date), 'dd LLL yyyy');
    const stats = readingTime(article.content);

    return (
        <>
            <article className="container mx-auto px-4">
                <header className="mb-12">
                    <h1 className={`text-3xl text-center ${H1Font.className}`}>
                        {article.data.title}
                    </h1>

                    <div className="container font-display text-grey-darkest mx-auto px-4 text-xs mt-4 mb-12 tracking-wide text-center">
                        <Tags tags={article.data.tags} />
                    </div>

                    <div className="container font-display text-grey-darkest mx-auto px-4 text-xs mt-14 mb-12 tracking-wide text-center">
                        {stats.text}{' • '}{date}
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
                    <Markdown options={{
                        overrides: {
                            code: {
                                component: CodeBlock,
                            }
                        }
                    }}>
                        {article.content}
                    </Markdown>
                </article>
                <div className="container font-display text-grey-darkest mx-auto px-4 text-xs mt-10 mb-12 tracking-wide text-center">
                    <Tags tags={article.data.tags} />
                </div>
            </article>
        </>
    );
};
