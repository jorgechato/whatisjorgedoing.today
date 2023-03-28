'use client';
import { useEffect, useState } from 'react'

import { PinnedRepos, GetPinnedRepos } from './FetchData'
import { Project } from './Project';
import { ProjectSkeleton } from './ProjectSkeleton'


export function ProjectList(props: any) {
    const [pinnedRepos, setPinnedRepos] = useState<PinnedRepos[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetPinnedRepos().then((data) => {
            setPinnedRepos(data)
            setLoading(false)
        });
    }, []);

    return (
        <>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {loading && <ProjectSkeleton cards={6} />}
                {pinnedRepos.map((repo: PinnedRepos) => <Project key={repo.url} repo={repo}/> )}
            </div>
        </>
    )
}