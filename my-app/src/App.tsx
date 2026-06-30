import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './assets/Footer';

const App: React.FC = () => {
  const navigate = useNavigate();
  const [startCoords, setStartCoords] = useState<{ x: number; y: number } | null>(null);
  const DRAG_THRESHOLD = 150;

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setStartCoords({ x: clientX, y: clientY });
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!startCoords) return;

    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const clientY = 'changedTouches' in e ? e.changedTouches[0].clientY : e.clientY;

    const deltaX = clientX - startCoords.x;
    const deltaY = clientY - startCoords.y;

    const dragDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (dragDistance >= DRAG_THRESHOLD) {
      navigate('./home');
    }

    setStartCoords(null);
  };

  return (
    <div
      className="container"
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      style={{
        cursor: startCoords ? 'grabbing' : 'grab',
        userSelect: 'none',
        touchAction: 'none'
      }}
    >
      <div className="bg-paper" />

      <div className="main-paper">
        <div className="Decor pin-Decor"></div>
        <div className="Decor clip-Decor"></div>
        <div className="Decor scribble-Decor"></div>
        <div className="Decor polaroid-Decor"></div>

        <div className="content">
          <div className="row">
            <span className="error-text">ERROR 404:</span>
          </div>
          <div className="row">
            <span className="courage-text">COURAGE</span>
            <span className="not-found-text">NOT FOUND</span>
          </div>
          <div className="instruction-text">
            &lt; Click and drag to tear the page &gt;
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;