const ShimmerMenu = () => {
  const dummyItems = new Array(5).fill(0); // simulate 5 items

  return (
    <div className="my-5 menu-container p-5 max-w-3xl mx-auto bg-white shadow-lg rounded-lg animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>{" "}
      {/* Restaurant Name */}
      <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>{" "}
      {/* Cuisines + Cost */}
      <div className="h-5 bg-gray-300 rounded w-1/4 mb-3"></div>{" "}
      {/* Menu Title */}
      <ul className="space-y-4">
        {dummyItems.map((_, index) => (
          <li key={index} className="border-b pb-4 last:border-b-0">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>{" "}
            {/* Item name + price */}
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>{" "}
            {/* Item description */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShimmerMenu;
