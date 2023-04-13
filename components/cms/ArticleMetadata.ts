export interface ArticleMetadata {
    slug: string;
    title: string;
    date: string;
    author: string;
    tags: string[];
    toc: boolean;
    summary?: string;
    draft?: boolean;
}
