import our_mission from "../assets/our_mission.jpg"

function Mission() {
    return (
        <div clssName="mission-section">
            <img src = {"our_mission"} alt="mission" className="mission-image"></img>
            <h3 className="reveal">Our Mission</h3>
            <p className = "mission-text">By addressing documented gaps in
                support systems for Diaspora and
                immigrant entrepreneurs USDUCC develops,
                supports, and advocates for
                entrepreneurial ventures so they can
                thrive and become generationally
                sustaining, regardless of national
                origin, sex, religion, or age of the
                owner. </p>
        </div>
    )
}

export default Mission;