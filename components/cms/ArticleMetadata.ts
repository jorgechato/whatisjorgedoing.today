export interface ArticleMetadata {
    slug: string;
    title: string;
    date: string;
    author: string;
    categories: string[];
    tags: string[];
    toc: boolean;
    summary: string;
    draft?: boolean;
}
