export function Tags({ tags, hover = true }: { tags: string[], hover?: boolean }) {
    return (
        <>
            {
                tags.map((tag) => {
                    return (
                        <span key={tag} className={`bg-grey-lightest text-grey-darkest text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full
                            ${hover && 'hover:bg-grey-light'} cursor-pointer`}>
                            <samp className='text-grey-dark'>#</samp>{tag}
                        </span>
                    )
                })
            }
        </>
    )
}