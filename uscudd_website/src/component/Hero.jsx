import hero from "../assets/hero.jpg"

function Hero() {
    return (
        <div className="home-banner">
            <img className = "banner-image"src={hero} alt="hero"></img>
            <h1 className="reveal" class="banner-text">Changing local business
                with innovation and
                empowerment</h1>
        </div>
    )
}

export default Hero;