import React, { useState } from 'react';
import './App.css';

function App() {
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '50%' });
  const [showSurprise, setShowSurprise] = useState(false);

  // Moves the "No" button to a random position on hover
  const handleNoHover = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10;  // range: 10% - 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10; // range: 10% - 90%
    setNoButtonPos({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  // Displays the surprise overlay with hearts
  const handleYesClick = () => {
    setShowSurprise(true);
  };

  return (
    <div className="app-container">
      {/* Background hearts animation */}
      <div className="floating-hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="heart-floating">❤️</span>
        ))}
      </div>

      <h1 className="romantic-title">
        Maya, would you grant me the honor of being my Valentine?
      </h1>

      <div className="buttons-container">
        {/* YES button */}
        <button className="yes-button" onClick={handleYesClick}>
          YES
        </button>

        {/* NO button (moves on hover) */}
        <button
          className="no-button"
          style={{ top: noButtonPos.top, left: noButtonPos.left }}
          onMouseEnter={handleNoHover}
        >
          NO
        </button>
      </div>

      {/* Surprise Overlay */}
      {showSurprise && (
        <div className="surprise-overlay">
          <div className="surprise-content">
            <h2>My heart is overjoyed!</h2>
            <p>
              Yeahhhh
            </p>
            <div className="overlay-hearts">
              {Array.from({ length: 14 }).map((_, index) => (
                <span key={index} className="overlay-heart">❤️</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
