import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header Component
const Header = () => {
  const [btnName, setBtnName] = useState("log in");
  const onlineStatus = useOnlineStatus();

  // console.log("Header Component");

  return (
    <div className="header">
      <div className="logoContainer">
        <Link to="/" className="logo">
          TastyGo
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            onlineStatus : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-Button"
            onClick={() => {
              btnName === "log in"
                ? setBtnName("log out")
                : setBtnName("log in");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
