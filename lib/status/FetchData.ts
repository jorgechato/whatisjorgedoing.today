export enum StatusType {
    OK = "OK",
    DEGRADED = "DEGRADED",
    MAJOR = "MAJOR",
    MINOR = "MINOR",
    MAINTENANCE = "MAINTENANCE",
    UNKNOWN = "UNKNOWN",
}


export interface Status {
    name: string;
    type: StatusType;
    url: string;
    version: string;
    description?: string;
    color?: string;
}


export function GetStatus(url: string): Promise<Status | null> {
    return fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json() as Promise<Status>;
        })
        .catch((err) => {
            console.error(err)
            return null
        });
}