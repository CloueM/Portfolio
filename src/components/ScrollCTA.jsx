import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/ScrollCTA.css';

function ScrollCTA() {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 300) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  function handleButtonClick() {
    if (scrolledDown === true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const projects = document.getElementById('featured-projects');
      if (projects) {
        projects.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  let buttonClass = 'scroll-cta-btn';
  if (scrolledDown === true) {
    buttonClass = 'scroll-cta-btn scrolled';
  }

  return (
    <button className={buttonClass} onClick={handleButtonClick}>
      {scrolledDown === false && (
        <>
          <span className="scroll-cta-text">SCROLL DOWN</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </>
      )}
      {scrolledDown === true && (
        <>
          <span className="scroll-cta-text">BACK TO TOP</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </>
      )}
    </button>
  );
}

export default ScrollCTA;
