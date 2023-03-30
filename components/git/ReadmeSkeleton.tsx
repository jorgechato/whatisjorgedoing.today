export function FileSkeleton() {
    return (
        <article className="prose">
            <div className="animate-pulse flex space-x-4 mb-3 rounded-md p-4">
                <div className="flex-1 space-y-3 py-1">
                    <div className="h-4 w-60 bg-grey-light rounded"></div>
                    <div className="h-3 bg-grey-lightest rounded"></div>
                    <div className="h-3 bg-grey-lightest rounded"></div>
                </div>
            </div>
            <div className="animate-pulse flex space-x-4 border border-grey-light rounded-md p-4">
                <div className="flex-1 space-y-4 py-3">
                    {Array(25).fill(0).map((_, index) => {
                        return (
                            <div key={index} className="h-2 bg-grey-lightest rounded"></div>
                        )
                    })}
                </div>
            </div>
            <div className="animate-pulse flex space-x-4 mb-3 rounded-md p-4">
                <div className="flex-1 space-y-3 py-1">
                    <div className="h-3 bg-grey-lightest rounded"></div>
                </div>
            </div>
        </article>
    )
}
