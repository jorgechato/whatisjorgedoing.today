import fs from 'fs';

import matter from 'gray-matter';

import { ArticleMetadata } from './ArticleMetadata';


export function GetArticleContent(slug: string) {
    const folder = process.env.ARTICLES_LOCATION;
    const file = `${folder}/${slug}.md`;
    const rawFile = fs.readFileSync(file, 'utf8');

    return matter(rawFile);
}

export function GetArticlesMetadata(): ArticleMetadata[] {
    const folder = process.env.ARTICLES_LOCATION;
    const files = fs.readdirSync(folder);
    const mdArticles = files.filter((file) => file.endsWith('.md'));

    const articles = mdArticles.map((fileName) => {
        const raw = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
        const article = matter(raw);

        return {
            slug: fileName.replace('.md', ''),
            title: article.data.title,
            date: article.data.date,
            autho: article.data.author,
            categories: article.data.categories,
            tags: article.data.tags,
            toc: article.data.toc,
            summary: article.data.summary,
        };
    });

    return articles;
}
