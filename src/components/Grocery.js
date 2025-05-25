import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="p-5">
      <h2 className="text-xl text-center font-bold mb-3">Our Grocery Online Store, and we have a lot of child components inside this webpage</h2>
      <h6 className="text-md text-center font-medium">User : {loggedInUser}</h6>
    </div>
  )
};

export default Grocery;