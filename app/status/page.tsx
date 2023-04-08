import { H1Font } from '@/components/Fonts';
import { StatusType } from '@/lib/status-page/FetchData';
import { Indicator } from '@/components/status-page/Indicator';
import { ProjectList } from '@/components/status-page/ProjectList';



export default function StatusPage() {
    return (
        <>
            <h1 className={`text-2xl mb-6 text-center ${H1Font.className}`} style={{ fontWeight: 'bold' }}>
                Status Page
            </h1>

            <ul className="opacity-50 cursor-pointer hover:opacity-100 transition duration-300
            border border-grey-light rounded-md p-6 mt-10 mb-10
            text-center columns-3 gap-2">
                {Object.keys(StatusType).map((type: string, index: number) => {
                    return (
                        <li key={index} className="inline-flex items-center w-full text-xs text-center">
                            <Indicator type={type as StatusType} />
                            <span className="text-grey-darkest ml-2">{type}</span>
                        </li>
                    );
                })}
            </ul>

            <ProjectList />
        </>
    );
}