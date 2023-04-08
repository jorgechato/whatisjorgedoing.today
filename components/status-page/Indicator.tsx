import { StatusType } from "@/lib/status-page/FetchData";


export function Indicator({ type }: { type: StatusType }) {
    const indicatorClass = {
        [StatusType.OK]: 'bg-green-500',
        [StatusType.DEGRADED]: 'bg-yellow-500',
        [StatusType.MINOR]: 'bg-orange-500',
        [StatusType.MAJOR]: 'bg-red-500',
        [StatusType.MAINTENANCE]: 'bg-violet-500',
        [StatusType.UNKNOWN]: 'bg-gray-500',
    }[type];

    const indicatorLightClass = {
        [StatusType.OK]: 'bg-green-400',
        [StatusType.DEGRADED]: 'bg-yellow-400',
        [StatusType.MINOR]: 'bg-orange-400',
        [StatusType.MAJOR]: 'bg-red-400',
        [StatusType.MAINTENANCE]: 'bg-violet-400',
        [StatusType.UNKNOWN]: 'bg-gray-400',
    }[type];

    return (
        <span className="top-0 left-0 relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${indicatorLightClass} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${indicatorClass}`}></span>
        </span>
    );
}
