import { ArticleList } from '@/components/cms/ArticleList';


export const metadata = {
  title: 'The secret Archive',
};

export default function Home() {
    return (
        <>
            <ArticleList/>
        </>
    )
}
