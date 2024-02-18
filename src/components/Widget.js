import React, { useEffect, useRef, useState } from 'react';
import './widgetStyles.css'; // Make sure this path matches the location of your CSS file
import img from "../video/img2.png";
import backgroundVideo from "../video/video4.mp4";
const Widget = () => {
  const eventsRef = useRef(null);

  useEffect(() => {
    const events = eventsRef.current;

    const handleMouseDown = (e) => {
      events.style.cursor = "grabbing";
      const isDown = true;
      const startX = e.pageX - events.offsetLeft;
      const startY = e.pageY - events.offsetTop;
      const scrollLeft = events.scrollLeft;
      const scrollTop = events.scrollTop;

      const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - events.offsetLeft;
        const y = e.pageY - events.offsetTop;
        const walkX = (x - startX) * 1;
        const walkY = (y - startY) * 1;
        events.scrollLeft = scrollLeft - walkX;
        events.scrollTop = scrollTop - walkY;
      };

      const handleMouseUpOrLeave = () => {
        events.style.cursor = "grab";
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUpOrLeave);
        window.removeEventListener('mouseleave', handleMouseUpOrLeave);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUpOrLeave);
      window.addEventListener('mouseleave', handleMouseUpOrLeave);
    };

    events.addEventListener('mousedown', handleMouseDown);

    return () => {
      events.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Handling the scroll buttons
  const scroll = (offset) => {
    eventsRef.current.scrollBy({ top: 0, left: offset, behavior: 'smooth' });
  };

  return (
    <div className="container">
      {/* <div className="top-bar">
        <h2>Upcoming events</h2>
        <button type="button" onClick={() => scroll(-200)} className="action-button--horizontal-scroll">Left</button>
        <button type="button" onClick={() => scroll(200)} className="action-button--horizontal-scroll">Right</button>
      </div> */}
      <div ref={eventsRef} id="events" className="events">
        {/* Map your events here */}
        <a href="#the-weeknd" className="event">
          <div className="event_image">
            <video controls autoPlay loop muted>
                <source src={backgroundVideo} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
            
          </div>
          <div className="event-description">
            <h2>StealthScout3</h2>
            <div className="bottom-stats">
                Main ODJ577 A model
              </div>
            
          </div>
        </a>
        <a href="#the-weeknd" className="event">
          <div className="event_image">
            <video controls autoPlay loop muted>
                <source src={backgroundVideo} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
            
          </div>
          <div className="event-description">
            <h2>StealthScout3</h2>
            <div className="bottom-stats">
                Main ODJ577 A model
              </div>
          </div>
        </a>
        <a href="#the-weeknd" className="event">
          <div className="event_image">
            <video controls autoPlay loop muted>
                <source src={backgroundVideo} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
            
          </div>
          <div className="event-description">
            <h2>StealthScout3</h2>
            <div className="bottom-stats">
                Main ODJ577 A model
              </div>
          </div>
        </a>
        <a href="#the-weeknd" className="event">
          <div className="event_image">
            <video controls autoPlay loop muted>
                <source src={backgroundVideo} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
            
          </div>
          <div className="event-description">
            <h2>StealthScout3</h2>
            <div className="bottom-stats">
                Main ODJ577 A model
              </div>
          </div>
        </a>

        <a href="#the-weeknd" className="event">
          <div className="event_image">
            <video controls autoPlay loop muted>
                <source src={backgroundVideo} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
            
          </div>
          <div className="event-description">
            <h2>StealthScout3</h2>
            <div className="bottom-stats">
                Main ODJ577 A model
              </div>
          </div>
        </a>

        <a href="#the-weeknd" className="event">
          <div className="event_image">
            <video controls autoPlay loop muted>
                <source src={backgroundVideo} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
            
          </div>
          <div className="event-description">
            <h2>StealthScout3</h2>
            <div className="bottom-stats">
                Main ODJ577 A model
              </div>
          </div>
        </a>

        <a href="#the-weeknd" className="event">
          <div className="event_image">
            <video controls autoPlay loop muted>
                <source src={backgroundVideo} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
           
          </div>
          <div className="event-description">
            <h2>StealthScout3</h2>
            <div className="bottom-stats">
                Main ODJ577 A model
              </div>
          </div>
        </a>

        <a href="#the-weeknd" className="event">
          <div className="event_image">
            <video controls autoPlay loop muted>
                <source src={backgroundVideo} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
           
          </div>
          <div className="event-description">
            <h2>StealthScout3</h2>
            <div className="bottom-stats">
                Main ODJ577 A model
              </div>
          </div>
        </a>
        
        
        


        
        {/* More events */}
      </div>
    </div>
  );
};

export default Widget;
