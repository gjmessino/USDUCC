import missionImg from "../assets/our_mission.jpg";

function Mission() {
  return (
    <div className="mission-section">
      <div className="mission-text">
        <h2 className="reveal-left">Our Mission</h2>
        <p className="reveal-left">
          By addressing documented gaps in support systems for Diaspora and
          immigrant entrepreneurs, USDUCC develops, supports, and advocates for
          entrepreneurial ventures so they can thrive and become generationally
          sustaining, regardless of national origin, sex, religion, or age of
          the owner.
        </p>
      </div>
      <div className="mission-image">
        <img className="reveal-scale" src={missionImg} alt="Our mission" />
      </div>
    </div>
  );
}

export default Mission;
