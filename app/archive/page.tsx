import { ArticleList } from '@/components/cms/ArticleList';
import { H1Font } from '@/components/Fonts';


export const metadata = {
    title: 'The secret Archive',
};

export default function Home() {
    return (
        <>
            <h1 className={`text-2xl mb-6 text-center ${H1Font.className}`} style={{ fontWeight: 'bold' }}>
                Archive
            </h1>
            <ArticleList />
        </>
    )
}
