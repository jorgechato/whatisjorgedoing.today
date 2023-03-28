import { PinnedRepos } from './FetchData';


export function Project(props: { repo: PinnedRepos }) {
    const repo: PinnedRepos = props.repo;

    return (
        <>
            <a href={repo.url} target='_blank'
                className="border border-gray-300 rounded-md p-4 transform 
            transition duration-500 hover:border-emerald-600">
                <div className="flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="font-semibold">
                            {repo.name}
                            { repo.homepageUrl && <span class="text-grey-darkest text-xs"> PROD</span> }
                            </div>
                        <div className="space-y-3">
                            <div className="text-sm text-grey-darkest">{repo.description}</div>
                            <div className="space-y-6 font-medium text-xs underline decoration-4 text-right"
                                style={{ "text-decoration-color": repo.primaryLanguage.color }}>
                                {repo.primaryLanguage.name}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}