function Partners() {
  const partners = ["Bastil", "Boleir", "Madrin", "DEI", "Armond"];
  return (
    <div className="partners-section">
      <div className="container">
        <h2 className="reveal">Our Partners</h2>
        <div className="partner-logos reveal-group">
          {partners.map((name) => (
            <div key={name} className="partner-chip reveal">{name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
