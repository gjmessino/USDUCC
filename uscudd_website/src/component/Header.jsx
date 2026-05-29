import { Link } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import About_Us from "../Pages/About_Us.jsx";
import Contact_Page from "../Pages/Contact_Page.jsx";
import Get_Involved from "../Pages/Get_Involved.jsx";
import logo from '../assets/logo.webp';

function Header() {
    return (
        <header>
            <div className="nav-logo">
                <Link to="/home">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <nav>
                <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/get-involved">Get Involved</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;