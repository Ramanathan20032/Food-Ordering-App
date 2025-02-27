import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-Button" onClick={() => {
            btnName === "log in" ? setBtnName("log out") : setBtnName("log in")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;