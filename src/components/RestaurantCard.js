import { CON_URL } from "../utils/constants";
import greenStar from "../assets/images/green-star-icon.png";

// RestaurantCard Component
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("resData : ", resData);
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, areaName } =
    resData?.info;
  const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3 || {};
  const { deliveryTime, slaString } = resData?.info?.sla;
  return (
    <div className="w-[230px] bg-white rounded-xl traansition duration-300 flex flex-col h-full min-h-[265px] hover:scale-95" 
    data-testid="resCard">
      {/* Restaurant Image */}
      <div className="relative">
        <img
          src={CON_URL + cloudinaryImageId}
          alt={name}
          className="rounded-xl w-full h-[150px] object-cover"
        />
        {/* Bottom black shadow overlay */}
        <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-black/100 to-transparent rounded-b-xl pointer-events-none"></div>
        {/* Header and SubHeader Tag */}
        {header && subHeader && (
          <div className="absolute bottom-1 left-1 bg-opacity-70 text-white text-md font-bold px-2 py-0.5">
            {header} {subHeader}
          </div>
        )}
      </div>

      {/* Restaurant Data */}
      <div className="p-2">
        {/* Restaurant Name */}
        <h3 className="text-md text-black font-bold truncate">{name}</h3>
        {/* Rating, Time, Price */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <span className="flex items-center font-semibold">
            <img src={greenStar} alt="Green Star Icon" className="w-5" />
            {avgRating}
          </span>
          <div className="mt-1 w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>{slaString}</span>
        </div>

        {/* Cuisines, Area */}
        <p className="text-sm text-gray-600 truncate">
          {cuisines?.join(", ") || "N/A"}
        </p>
        <p className="text-sm text-gray-700">{areaName || "Unknown Area"}</p>
      </div>
    </div>
  );
};

// ! Higher Order Component - To Render the Restaurant card with veg promoted label
// ? input -> RestaurantCard   : output -> RestaurantCard with promoted Label

export const withVegPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute right-0 top-0 bg-green-500 text-white rounded-md text-sm px-3 py-1 z-10">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
