import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    try{
      const response = await fetch(MENU_API + resId);

      if(!response.ok){
        throw new Error(`HTTP Error Status : ${response.status}`)
      }

      const jsonData = await response.json();
      console.log("MENU API Response : " + jsonData)

      setResInfo(jsonData.data);
    }
    catch(error){
      console.log("Error Fetching Data : ", error)
    }
  }

  return resInfo;
}

export default useRestaurantMenu;
