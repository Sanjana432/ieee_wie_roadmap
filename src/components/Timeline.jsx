import React from 'react';

const Timeline = ({ events, activeIndex, itemRefs, setActiveIndex }) => {
  const scrollToItem = index => {
    itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="timeline">
      <ul>
        {events.map((event, index) => (
          <li
            key={event.date}
            ref={el => (itemRefs.current[index] = el)}
            data-index={index}
            onClick={() => scrollToItem(index)}
            className={index === activeIndex ? 'active' : ''}
          >
            {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
