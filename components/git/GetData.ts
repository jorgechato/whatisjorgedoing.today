import { PinnedRepos } from "@/lib/github/FetchData"


export function GetReadme(): Promise<string> {
    return fetch("/api/git/readme")
        .then((res) => res.json());
}


export function GetPinnedRepos(): Promise<PinnedRepos[]> {
    return fetch("/api/git/repositories")
        .then((res) => res.json() as Promise<PinnedRepos[]>);
}