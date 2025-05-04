import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  const { name, cuisines, costForTwo, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { title, itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="my-5 menu-container p-5 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-4">
        {cuisines.join(", ")} –{" "}
        <span className="font-medium">Cost for Two: ₹{costForTwo / 100}</span>
      </p>
      <h4 className="text-xl font-semibold mb-3 text-gray-700">
        Menu - {title}
      </h4>
      <ul className="space-y-4">
        {itemCards.map((item) => {
          return (
            <li
              key={item.card.info.id}
              className="border-b pb-4 last:border-b-0"
            >
              <p className="text-lg font-medium text-gray-800">
                {item.card.info.name} - {"Rs."}{" "}
                {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </p>
              <h5 className="text-sm text-gray-500 mt-1">
                {item.card.info.description}
              </h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
