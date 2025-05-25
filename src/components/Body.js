import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withVegPromotedLabel } from "./RestaurantCard";

// Body Component
const Body = () => {
  const [listOfRestaurant, filteredRestaurant, setFilteredRestaurant] =
    useRestaurant();
  const [searchText, setSearchText] = useState("");

  // ! custom hook to find the online status
  const onlineStatus = useOnlineStatus();

  // ! higher order component call
  const RestaurantCardVegPromoted = withVegPromotedLabel(RestaurantCard);

  if (onlineStatus === false) {
    return (
      <h2 className="online-status">Seems u'r internet is Not Connected</h2>
    );
  }

  // conditional Rendering (?:) Shimmer UI
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body max-w-6xl mx-auto">
      <div className="search-filter search-filter flex items-center p-5 pb-3 bg-white">
        <div className="search">
          <input
            type="text"
            className="search-bar border border-gray-600 text-sm rounded-md px-2 py-1"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-green-400 hover:bg-green-500 text-sm text-white ml-3 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300"
            onClick={() => {
              // console.log(searchText)
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn bg-orange-400 hover:bg-orange-500 text-sm text-white ml-4 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter(
                (res) => res.info.avgRating >= 4.7
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Above 4.7
          </button>
        </div>
      </div>
      <div className="flex flex-wrap p-5 gap-5">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* if restaurant is veg promoted then render vegPromoted Component */}
            {restaurant.info.veg ? (
              <RestaurantCardVegPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
