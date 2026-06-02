import vite from "../assets/vite.svg"

function Events() {
    return (
        <div className="events-section">
            <h2 className="reveal">Upcoming Events</h2>
            <div className="events-grid">
                <div className="event-card">
                    <img src={vite} alt="vite" />
                    <p>decription</p>
                </div>
                <div className="event-card">
                    <img src={vite} alt="vite" />
                    <p>decription</p>
                </div>
                <div className="event-card">
                    <img src={vite} alt="vite" />
                    <p>decription</p>
                </div>
            </div>
        </div>
    )
}

export default Events;