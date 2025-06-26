import React from 'react';

const EventDisplay = ({ event, index }) => {
  const isEven = index % 2 === 0;
  const placeholderClass = isEven ? "image-box white-box" : "image-box pink-box";

  return (
    <div className="event-display">
      <h1 className="event-title">{event.title}</h1>
      <h2 className="event-subtitle">{event.subtitle}</h2>

      <div className="event-content">
        <div className="event-description">
          <p>{event.description}</p>
          <p>{event.description}</p>
          <p>{event.description}</p>
        </div>

        <div className={placeholderClass}>
          {event.image ? (
            <img src={event.image} alt={event.title} />
          ) : (
            <div className="empty-placeholder">Image Placeholder</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDisplay;

