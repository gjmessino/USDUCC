import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <div className="home-banner">
      <div className="banner-image">
        <img src={heroImg} alt="USDUCC hero" />
      </div>
      <div className="banner-text">
        <h1 className="reveal-right">Changing local business with innovation and empowerment</h1>
      </div>
    </div>
  );
}

export default Hero;
