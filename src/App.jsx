import React, { useState, useRef, useEffect } from 'react';
import { events } from './data/events';
import EventDisplay from './components/EventDisplay';
import Timeline from './components/Timeline';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      { root: document.querySelector('.timeline'), threshold: 0.6 }
    );

    itemRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="roadmap">
      <EventDisplay event={events[activeIndex]} />
      <Timeline
        events={events}
        activeIndex={activeIndex}
        itemRefs={itemRefs}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default App;
