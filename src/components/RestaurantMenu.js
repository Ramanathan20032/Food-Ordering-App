import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        MENU_API + resId
      );

      // Prevent Parsing Html as Json
      // const contentType = response.headers.get("content-type");
      // if (!contentType || !contentType.includes("application/json")) {
      //   throw new Error("Invalid response: Expected JSON but received HTML.");
      // }

      if (!response.ok) {
        throw new error(`HTTP Error Status : ${response.status}`);
      }

      const jsonData = await response.json();
      console.log("MENU Api Response : ", jsonData);

      // updating it into the state variable
      setResInfo(jsonData.data);
    } catch (error) {
      console.log("Error Fetching Data : " + error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { title, itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu-container">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {"Cost for Two : Rs. " + costForTwo / 100}
      </p>
      <h4>Menu - {title}</h4>
      <ul>
        {itemCards.map((item) => {
          return(
            <li key={item.card.info.id}>
              <p className="menu-title">
                {item.card.info.name} - {"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </p>
              <h5 className="menu-description">{item.card.info.description}</h5>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
