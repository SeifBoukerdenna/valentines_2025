import React, { useState } from 'react';
import './App.css';

function App() {
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '50%' });
  const [showSurprise, setShowSurprise] = useState(false);

  const moveNoButton = () => {
    const directions = ["top-left", "top-right", "bottom-left", "bottom-right", "center"];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];

    let randomTop = Math.floor(Math.random() * 80) + 10;  // range: 10% - 90%
    let randomLeft = Math.floor(Math.random() * 80) + 10; // range: 10% - 90%

    switch (randomDirection) {
      case "top-left":
        randomTop = Math.floor(Math.random() * 30) + 5;
        randomLeft = Math.floor(Math.random() * 30) + 5;
        break;
      case "top-right":
        randomTop = Math.floor(Math.random() * 30) + 5;
        randomLeft = Math.floor(Math.random() * 50) + 50;
        break;
      case "bottom-left":
        randomTop = Math.floor(Math.random() * 50) + 50;
        randomLeft = Math.floor(Math.random() * 30) + 5;
        break;
      case "bottom-right":
        randomTop = Math.floor(Math.random() * 50) + 50;
        randomLeft = Math.floor(Math.random() * 50) + 50;
        break;
      case "center":
        randomTop = Math.floor(Math.random() * 50) + 25;
        randomLeft = Math.floor(Math.random() * 50) + 25;
        break;
    }

    setNoButtonPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleYesClick = () => {
    setShowSurprise(true);
  };

  return (
    <div className="app-container">
      <div className="floating-hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="heart-floating">❤️</span>
        ))}
      </div>

      <h1 className="romantic-title">
        Maya, my dearest, would you grant me the honor of being my Valentine?
      </h1>

      <div className="buttons-container">
        <button className="yes-button" onClick={handleYesClick}>
          YES
        </button>

        {/* No Button now moves on hover AND tap */}
        <button
          className="no-button"
          style={{ top: noButtonPos.top, left: noButtonPos.left }}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
        >
          NO
        </button>
      </div>

      {showSurprise && (
        <div className="surprise-overlay">
          <div className="surprise-content">
            <h2>My heart is overjoyed!</h2>
            <p>Thank you for saying YES! I’m counting down the moments until our special Valentine’s Day together. ❤️</p>
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
