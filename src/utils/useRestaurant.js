import { useEffect, useState } from "react";

const useRestaurant = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error(`HTTP Error Status : ${response.status}`);
      }
      const jsonData = await response.json();
      // console.log("Restaurant Listing API : " + jsonData);

      setListOfRestaurant(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(listOfRestaurant);
      setFilteredRestaurant(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error Fetching Data : " + error);
    }
  };

  return [listOfRestaurant, filteredRestaurant, setFilteredRestaurant];
};

export default useRestaurant;
