'use client';
import { useEffect, useState } from 'react';

import { PinnedRepos } from '@/lib/github/FetchData';
import { Repository } from './Repository';
import { RepositorySkeleton } from './RepositorySkeleton';
import { GetPinnedRepos } from './GetData';


export function RepositoryList(props: any) {
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
                {loading && <RepositorySkeleton cards={6} />}
                {pinnedRepos.map((repo: PinnedRepos) => <Repository key={repo.url} repo={repo}/> )}
            </div>
        </>
    )
}