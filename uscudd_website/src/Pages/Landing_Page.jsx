import Home from "./Home.jsx"
import logo from "../assets/logo.webp"
import { useNavigate } from "react-router-dom";

function Landing_Page() {
  const navigate = useNavigate();
  return (
    <div className="landing-hero">
      <img src={logo}></img>
      <button className="btn-primary" onClick={() => navigate('/home')}>
        Enter Website
      </button>
    </div>
  );
}

export default Landing_Page;