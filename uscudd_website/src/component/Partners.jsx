import partners from "../assets/partners.png"

function Partners() {
    return (
        <div className="partners-section">
            <h2 className="reveal">Our Partners</h2>
            <img src={partners} alt="partners" className="partner-logo"></img>
        </div>
    )
}

export default Partners;