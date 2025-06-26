import React, { useEffect, useRef, useState } from 'react';
import { events } from './data/events';
import EventDisplay from './components/EventDisplay';
import Timeline from './components/Timeline';
import './styles.css';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visibleEntry = entries.find(entry => entry.isIntersecting);
        if (visibleEntry) {
          const index = Number(visibleEntry.target.getAttribute('data-index'));
          setActiveIndex(index);
        }
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <Timeline
        events={events}
        activeIndex={activeIndex}
        itemRefs={itemRefs}
        setActiveIndex={setActiveIndex}
      />
      <div className="event-list">
        <EventDisplay event={events[activeIndex]} index={activeIndex} />
      </div>
    </>
  );
};

export default App;


