import fs from 'fs';

import matter from 'gray-matter';

import { ArticleMetadata } from './ArticleMetadata';

const config: {[key: string]: any} = require('@/my.config.js');


export function GetArticleContent(slug: string) {
    const folder = config.ARTICLES_LOCATION ?? 'content/articles';
    const file = `${folder}/${slug}.md`;
    const rawFile = fs.readFileSync(file, 'utf8');

    return matter(rawFile);
}

export function GetArticleMetadata(slug: string): ArticleMetadata {
    const folder = config.ARTICLES_LOCATION ?? 'content/articles';
    const file = `${folder}/${slug}.md`;
    const rawFile = fs.readFileSync(file, 'utf8');

    return matter(rawFile).data as ArticleMetadata;
}

export function GetArticlesMetadata(limit: number = Infinity): ArticleMetadata[] {
    const folder = config.ARTICLES_LOCATION ?? 'content/articles';
    const files = fs.readdirSync(folder);
    const mdArticles = files.filter((file) => file.endsWith('.md'));

    const articles = mdArticles.map((fileName) => {
        const raw = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
        const article = matter(raw);

        return {
            slug: fileName.replace('.md', ''),
            title: article.data.title,
            date: article.data.date,
            author: article.data.author,
            categories: article.data.categories,
            tags: article.data.tags,
            toc: article.data.toc,
            summary: article.data.summary,
        };
    }).sort(
    (a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime(); }
    ).slice(0, limit);

    return articles;
}
