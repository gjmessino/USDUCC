import { Link, useLocation } from "react-router-dom";
import navlogo from "../assets/navlogo.png"

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className="navbar">
      <div className="nav-logo">
        <Link to="/home">
          <img src={navlogo} alt="USDUCC logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/home" className={isActive("/home")}>Home</Link></li>
          <li><Link to="/about" className={isActive("/about")}>About Us</Link></li>
          <li><Link to="/get-involved" className={isActive("/get-involved")}>Get Involved</Link></li>
          <li><Link to="/contact" className={isActive("/contact")}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
