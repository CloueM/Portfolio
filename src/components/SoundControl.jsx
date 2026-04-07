import React, { useState, useEffect, useRef } from 'react';
import bgMusic from '../assets/sounds/background-music.mp3';
import '../styles/SoundControl.css';

function SoundControl() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const audioReference = useRef(null);

  useEffect(() => {
    function handleScrollEvent() {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScrollEvent);
    return function() {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    const musicElement = audioReference.current;
    
    if (musicElement) {
      musicElement.volume = 0.5;

      if (isMusicPlaying === true) {
        musicElement.play().catch(error => {
          console.log("Autoplay blocked. Sound will start upon user interaction.", error);
        });
      } else {
        musicElement.pause();
      }
    }
  }, [isMusicPlaying]);

  function toggleMusic() {
    if (isMusicPlaying === true) {
      setIsMusicPlaying(false);
    } else {
      setIsMusicPlaying(true);
    }
  }

  let soundButtonClass = "sound-btn";
  if (isScrolled === true) {
    soundButtonClass = "sound-btn scrolled";
  }

  return (
    <div className="sound-control-container">
      <button className={soundButtonClass} onClick={toggleMusic} aria-label="Toggle Background Music">
        {isMusicPlaying === true ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
            <path fill="currentColor" fillRule="evenodd" d="m403.966 426.944l-33.285-26.63c74.193-81.075 74.193-205.015-.001-286.09l33.285-26.628c86.612 96.712 86.61 242.635.001 339.348M319.58 155.105l-33.324 26.659c39.795 42.568 39.794 108.444.001 151.012l33.324 26.658c52.205-58.22 52.205-146.109-.001-204.329m-85.163-69.772l-110.854 87.23H42.667v170.666h81.02l110.73 85.458z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
            <path fill="currentColor" fillRule="evenodd" d="m403.375 257.27l59.584 59.584l-30.167 30.166l-59.583-59.583l-59.584 59.583l-30.166-30.166l59.583-59.584l-59.583-59.583l30.166-30.166l59.584 59.583l59.583-59.583l30.167 30.166zM234.417 85.333l-110.854 87.23H42.667v170.666h81.02l110.73 85.458z"/>
          </svg>
        )}
      </button>
      <audio ref={audioReference} src={bgMusic} loop />
    </div>
  );
}

export default SoundControl;
