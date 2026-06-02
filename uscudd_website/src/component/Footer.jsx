import Subscribe_Form from "./Forms/Subscribe_Form.jsx"
import About_Us from "../Pages/About_Us.jsx"
import Get_Involved from "../Pages/Get_Involved.jsx";
import Contact_Page from "../Pages/Contact_Page.jsx";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="main-footer">
            <Subscribe_Form/>
            <div className = "socials">
                <ul>
                    <li><a href = "https://www.facebook.com/"/></li>
                    <li><a href = "https://www.linkedin.com"/></li>
                    <li><a href ="https://www.instagram.com/?hl=en"/></li><a href ="https://www.instagram.com/?hl=en"/>
                    <li><a href = "https://x.com/"/></li>
                </ul>
            </div>
            <div className = "footer_links">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to = "/get_involved">Get Involved</Link></li>
                    <li><Link to ="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;