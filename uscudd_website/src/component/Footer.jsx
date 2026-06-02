import { Link } from "react-router-dom";
import SubscribeForm from "./Forms/Subscribe_Form.jsx";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <SubscribeForm />
          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-icon">fb</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social-icon">in</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-icon">ig</a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" className="social-icon">x</a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/get-involved">Join Us</Link></li>
              <li><Link to="/get-involved">Donate</Link></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Need Help?</h4>
            <ul>
              <li><Link to="/contact">FAQs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/contact">Careers</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} USDUCC. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
