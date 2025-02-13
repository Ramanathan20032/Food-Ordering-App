import { CON_URL } from "../utils/constants"; 

// RestaurantCard Component
const RestaurantCard = (props) => {
  const {resData} = props
  const {name, avgRating, cuisines, costForTwo, cloudinaryImageId} = resData?.info;
  const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
      <img src={ CON_URL + cloudinaryImageId } alt="res-image" className="res-image"/>
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ") || "N/A"}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Min</h4>
    </div>
  )
}

export default RestaurantCard;