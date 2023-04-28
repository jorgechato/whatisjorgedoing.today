import { ArticleList } from '@jorgechato/manyo';


export const metadata = {
    title: 'The secret Archive',
};

export default function Home() {
    return (
        <>
            <h1 className="text-2xl mb-6 text-center font-h1 font-bold">
                Archive
            </h1>
            <ArticleList />
        </>
    )
}
