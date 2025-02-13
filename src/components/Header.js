// Header Component
const Header = () => {
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
        </ul>
      </div>
    </div>
  )
}

export default Header;