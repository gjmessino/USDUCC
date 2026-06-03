import { Link } from "react-router-dom";
import SubscribeForm from "./Forms/Subscribe_Form.jsx";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <SubscribeForm />
          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-icon">
              <FaFacebook style={{ color: '#1877F2' }} size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedin style={{ color: '#0A66C2' }} size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-icon">
              <FaInstagram style={{ color: '#E4405F' }} size={24} />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" className="social-icon">
              <FaTwitter  style={{ color: '#1DA1F2' }} size={24} />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/get-involved">Join Us</Link></li>
              <li><Link to="/home">Donate</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
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
