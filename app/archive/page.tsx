import { ArticleList } from '@/components/cms/ArticleList';
import { H1Font } from '@/components/Fonts';


export const metadata = {
    title: 'The secret Archive',
};

export default function Home() {
    return (
        <>
            <h1 className="text-2xl mb-6 text-center">
                <span className={H1Font.className}>
                    Archive
                </span>
            </h1>
            <ArticleList />
        </>
    )
}
