export enum StatusType {
    OK = "OK",
    DEGRADED = "DEGRADED",
    MINOR = "MINOR",
    MAJOR = "MAJOR",
    MAINTENANCE = "MAINTENANCE",
    UNKNOWN = "UNKNOWN",
}


export interface Status {
    name: string;
    type: StatusType;
    url: string;
    version?: string;
    description?: string;
    color?: string;
    watching?: string;
}


export function GetStatus(url: string, name: string): Promise<Status> {
    if (!url) {
        return Promise.resolve({
            type: StatusType.UNKNOWN,
            url: "",
            watching: url,
            name: name,
        } as Status);
    }

    return fetch(url)
        .then((res) => {
            if (!res.ok) {
                let error = StatusType.UNKNOWN;

                switch (res.status.toString()[0]) {
                    case "5":
                        error = StatusType.MAJOR;
                        break;
                    case "4":
                        error = StatusType.MINOR;
                        break;
                    case "3":
                        error = StatusType.MAINTENANCE;
                        break;
                }

                return {
                    type: error,
                    url: new URL(url).origin,
                    name: name,
                } as Status;
            }
            return res.json() as Promise<Status>;
        })
        .then((status) => {
            status.watching = url;
            return status;
        })
        .catch((err) => {
            console.error(err)
            return {
                type: StatusType.MAJOR,
                url: new URL(url).origin,
                watching: url,
                name: name,
            } as Status;
        });
}