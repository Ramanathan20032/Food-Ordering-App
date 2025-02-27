import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Body Component
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  // console.log("Body Rendered");

  const fetchData = async () => {
    try{
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      if(!response.ok){
        throw new error(`API Response : ${response.status}`)
      }

      const jsonData = await response.json();
      console.log(jsonData);

      // updating the state variable.
      // setListOfRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      // Optional chaining (?.)
      setListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    catch(error){
      console.log("Error Fetching Data : ", error);
    }
  }

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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
