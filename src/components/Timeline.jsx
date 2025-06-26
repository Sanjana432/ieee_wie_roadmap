import React from 'react';

const Timeline = ({ events, activeIndex, itemRefs, setActiveIndex }) => {
  const scrollToItem = index => {
    itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setActiveIndex(index); // Update state manually on click
  };

  const scrollUp = () => {
    if (activeIndex > 0) scrollToItem(activeIndex - 1);
  };

  const scrollDown = () => {
    if (activeIndex < events.length - 1) scrollToItem(activeIndex + 1);
  };

  return (
    <div className="timeline">
      <button onClick={scrollUp} className="scroll-btn">↑</button>
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
      <button onClick={scrollDown} className="scroll-btn">↓</button>
    </div>
  );
};

export default Timeline;


