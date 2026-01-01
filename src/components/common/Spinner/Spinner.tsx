export const Spinner = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <p className="sr-only">Loading...</p>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
    )
}