const Loader = () => {
    return (
        <div className="animate-pulse space-y-4">
            {/* Header Skeleton */}
            <div className="h-8 bg-gray-400 rounded w-3/4"></div>

            {/* Image Skeleton */}
            <div className="h-48 bg-gray-300 rounded"></div>

            {/* Text Skeleton */}
            <div className="space-y-2">
                <div className="h-4 bg-gray-500 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-400 rounded w-4/6"></div>
            </div>

            {/* Button Skeleton */}
            <div className="h-10 bg-gray-300 rounded w-24"></div>
        </div>
    );
}

export default Loader;