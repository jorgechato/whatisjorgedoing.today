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


export function GetReadme(): Promise<string> {
    return fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify({
            query: `
        query {
            repository(owner: "${process.env.GITHUB_USERNAME}", name: "${process.env.GITHUB_USERNAME}") {
                object(expression: "master:README.md") {
                    ... on Blob {
                        text
                    }
                }
            }
        }
        `,
        }),
    })
        .then((res) => res.json())
        .then((res) => res.data.repository.object.text);
}


export function GetStatus(): Promise<string> {
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
                status {
                    emoji
                    message
                }
            }
        }
        `,
        }),
    })
        .then((res) => res.json())
        .then((res) => res.data.user.status.message);
}
