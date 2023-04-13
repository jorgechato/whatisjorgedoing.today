import fs from 'fs';

import matter from 'gray-matter';
const emoji = require('emoji-dictionary');

import { ArticleMetadata } from './ArticleMetadata';

const config: { [key: string]: any } = require('@/my.config.js');


export function GetArticleContent(slug: string) {
    const folder = config.ARTICLES_LOCATION ?? 'content/articles';
    const file = `${folder}/${slug}.md`;
    try {
        const rawFile = fs.readFileSync(file, 'utf8');
        const article = matter(rawFile);
        article.content = article.content.replace(/:\w+:/gi, (name: string) => emoji.getUnicode(name));
        article.data.title = article.data.title.replace(/:\w+:/gi, (name: string) => emoji.getUnicode(name));

        return article;
    } catch (error) {
        return null;
    }
}

export function GetArticlesMetadata(limit: number = Infinity): ArticleMetadata[] {
    const folder = config.ARTICLES_LOCATION ?? 'content/articles';
    const files = fs.readdirSync(folder);
    const mdArticles = files.filter((file) => file.endsWith('.md'));

    const articles = mdArticles.map((fileName) => {
        const raw = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
        const article = matter(raw);
        const title = article.data.title.replace(/:\w+:/gi, (name: string) => emoji.getUnicode(name));

        return {
            slug: fileName.replace('.md', ''),
            title: title,
            date: article.data.date,
            author: article.data.author,
            tags: article.data.tags,
            toc: article.data.toc,
            summary: article.data.summary,
            draft: article.data.draft ?? false,
        };
    })
        .filter((article) => !article.draft)
        .sort(
            (a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime(); }
        ).slice(0, limit);

    return articles;
}
