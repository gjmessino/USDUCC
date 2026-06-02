const placeholderEvents = [
  { id: 1, title: "Event Title", description: "Event description coming soon." },
  { id: 2, title: "Event Title", description: "Event description coming soon." },
  { id: 3, title: "Event Title", description: "Event description coming soon." },
];

function Events() {
  return (
    <div className="events-section">
      <div className="container">
        <h2 className="reveal">Upcoming Events</h2>
        <div className="events-grid reveal-group">
          {placeholderEvents.map((event) => (
            <div key={event.id} className="event-card reveal">
              <div className="event-img-placeholder">img</div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
