import { useState } from "react";
import { Link } from "react-router-dom";

// Header Component
const Header = () => {
  const [btnName, setBtnName] = useState("log in");

  // console.log("Header Component");

  return (
    <div className="header">
      <div className="logoContainer">
        <a href="#" className="logo">
          TastyGo
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
