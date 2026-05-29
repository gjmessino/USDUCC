import Home from "./Home.jsx"
import { useNavigate } from "react-router-dom";

function Landing_Page() {
  const navigate = useNavigate();
  return (
    <div className="landing-hero">
      <img src="uscudd_website/src/assets/hero.jpg"></img>
      <button className="btn-primary" onClick={() => navigate('/home')}>
        Enter Website
      </button>
    </div>
  );
}

export default Landing_Page;