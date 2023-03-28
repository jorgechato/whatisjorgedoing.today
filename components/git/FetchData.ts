export interface PinnedRepos {
    name: string;
    description: string;
    url: string;
    homepageUrl: string;
    stargazerCount: number;
    forkCount: number;
    primaryLanguage: {
        name: string;
        color: string;
    };
}


export function GetPinnedRepos(): Promise<PinnedRepos[]> {
    return fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify({
            query: `
        query {
            user(login: "${process.env.GITHUB_USERNAME}") {
                pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                        ... on Repository {
                            name
                            description
                            url
                            homepageUrl
                            stargazerCount
                            forkCount
                            primaryLanguage {
                                name
                                color
                            }
                        }
                    }
                }
            }
        }
        `,
        }),
    })
        .then((res) => res.json())
        .then((res) => res.data.user.pinnedItems.nodes);
}