import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

// Body Component
const Body = () => {
  
  const [listOfRestaurant, filteredRestaurant, setFilteredRestaurant] = useRestaurant();
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h2 className="online-status">Seems u'r internet is Not Connected</h2>
  }

  // conditional Rendering (?:) Shimmer UI
  return listOfRestaurant.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input type="text" className="search-bar" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}></input>
          <button onClick={() => {
            // console.log(searchText)
            const filteredRestaurant = listOfRestaurant.filter((res) => (
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            ))
            setFilteredRestaurant(filteredRestaurant)
          }}>Search</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter(
                (res) => res.info.avgRating >= 4.7
              );
              setFilteredRestaurant(filteredRestaurant)
            }}
          >
            Above 4.7
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
