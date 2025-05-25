import { CON_URL } from "../utils/constants";

// RestaurantCard Component
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="p-3 w-[200px] bg-gray-100 hover:bg-gray-200 hover:border rounded-lg hover:border-gray-400 transition duration-300 flex flex-col h-full min-h-[300px]">
      <img
        src={CON_URL + cloudinaryImageId}
        alt="res-image"
        className="res-image rounded-lg"
      />
      <h3 className="text-lg font-bold pt-1">{name}</h3>
      <h4>{cuisines?.join(", ") || "N/A"}</h4>
      <h4>{costForTwo}</h4>
      <div className="flex items-center justify-between">
        <h4>{deliveryTime} Min</h4>
        <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
};

// ! Higher Order Component - To Render the Restaurant card with veg promoted label
// ? input -> RestaurantCard   : output -> RestaurantCard with promoted Label

export const withVegPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-green-500 text-white rounded-md text-sm px-3 py-1 m-2 ml-3 mt-3">
          Veg
        </label>
        <RestaurantCard {...props}/>
      </>
    )
  }
}

export default RestaurantCard;
