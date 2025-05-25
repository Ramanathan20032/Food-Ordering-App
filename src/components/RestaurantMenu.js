import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import greenStar from "../assets/images/green-star-icon.png";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  // Custom Hook to fetch the data from Api and return to the RestaurantMenu() Component
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  // state variable for Managing index
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
  const itemCtegories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemCtegories);

  const {
    name,
    cuisines,
    cloudinaryImageId,
    locality,
    totalRatingsString,
    costForTwoMessage,
    avgRating,
  } = resInfo.cards[2].card.card.info;

  return (
    <div className="menu max-w-3xl mx-auto shadow-md rounded-xl my-7 px-5 py-7">
      <h2 className="text-left text-2xl font-bold text-black mb-2">{name}</h2>
      <div className="border border-zinc-400 shadow-md shadow-gray-400 p-3 mb-5 rounded-xl">
        <div className="flex items-center gap-2">
          <img src={greenStar} alt="Green Star Icon" className="w-6" />
          <p className="flex items-center">
            <span className="font-medium">{avgRating}</span>
            <span className="font-medium ml-1">({totalRatingsString})</span>
          </p>
          <div className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></div>
          <p className="font-medium">{costForTwoMessage}</p>
        </div>
        <p className="underline text-red-500 mb-1">{cuisines.join(", ")}</p>
        <p className="text-sm font-semibold">
          Outlet -{" "}
          <span className="text-sm text-zinc-500 font-medium">{locality}</span>
        </p>
      </div>

      {/* Categories Accordian */}
      {itemCtegories.map((category, index) => {
        return (
          // ! controlled Component
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            // ! Set showIndex = index when a different item is clicked (to open it),
            // ! Set showIndex = null when the same item is clicked again (to close it).
            // * track the current index (title) and return back to the parent and change the state of that particular index (title), if the index is same as previous selected index it will close that too
            setShowIndex={() =>
              setShowIndex((prev) => (prev === index ? null : index))
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
