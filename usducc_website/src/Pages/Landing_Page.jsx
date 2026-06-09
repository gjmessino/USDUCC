import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-hero">
      <div className="landing-logo-container">
        <img src={logo} alt="USDUCC logo" />
      </div>
      <button className="btn-primary" onClick={() => navigate("/home")}>
        Enter Website
      </button>
    </div>
  );
}

export default LandingPage;
