import partners from "../assets/partners.png"

function Partners() {
  return (
    <div className="partners-section">
      <div className="container">
        <h2 className="reveal">Our Partners</h2>
        <div className="partner-logos reveal-group">
          <img src={partners}/>
        </div>
      </div>
    </div>
  );
}

export default Partners;
