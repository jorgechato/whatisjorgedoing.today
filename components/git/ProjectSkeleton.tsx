export function ProjectSkeleton(props: { cards: number } = { cards: 1 }) {
    return (
        <>
            {Array(props.cards).fill(0).map((_, index) => {
                return (
                    <div key={index} className="border border-gray-300 rounded-md p-4">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-5 w-60 bg-gray-300 rounded"></div>
                                <div className="space-y-2">
                                    <div className="h-3 bg-slate-200 rounded"></div>
                                    <div className="h-3 bg-slate-200 rounded"></div>
                                    <div className="h-3 bg-slate-200 rounded"></div>
                                </div>
                                <div className="w-10 h-2 bg-gray-300 rounded ml-auto"></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}