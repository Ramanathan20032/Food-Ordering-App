const Shimmer = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-wrap justify-center p-5 gap-5">
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-[230px] p-3 bg-gray-100 rounded-lg flex flex-col min-h-[300px] animate-pulse"
          >
            {/* Image Placeholder */}
            <div className="h-[120px] bg-gray-300 rounded-lg mb-3"></div>
            {/* Title */}
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            {/* Cuisines */}
            <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
            {/* Rating */}
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
            {/* Cost */}
            <div className="h-3 bg-gray-200 rounded w-2/3 mb-1"></div>
            {/* Delivery Time */}
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
