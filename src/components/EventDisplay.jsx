import React from 'react';

const EventDisplay = ({ event }) => {
  return (
    <div className="event-display">
      <h1>{event.title}</h1>
      <h3>{event.subtitle}</h3>
      <p>{event.description}</p>
      <img src={event.image} alt={event.title} />
    </div>
  );
};

export default EventDisplay;
