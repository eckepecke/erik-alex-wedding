// WeddingInvitationPopup.jsx
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './Popup.css';

const WeddingInvitationPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setPopupVisible(false);
    setTimeout(() => setShowPopup(false), 400);
  };

  if (!showPopup) return null;

  return (
    <div 
      className={`popup-overlay ${popupVisible ? 'visible' : ''}`}
      onClick={closePopup}
    >
      <div 
        className={`popup-container ${popupVisible ? 'visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closePopup}
          className="popup-close"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="popup-content">
          <div className="popup-divider top"></div>

          <div className="popup-names">
            <h2 className="popup-name">ALEXANDRA IANCU</h2>
            <p className="popup-ampersand">&</p>
            <h2 className="popup-name">ERIK ANDERS OLOFSSON</h2>
          </div>

          <p className="popup-invitation">
            joyfully invite you to celebrate their marriage
          </p>

          <div className="popup-datetime">
            <p className="popup-date">Friday, 17th of July 2026</p>
            <p className="popup-time">Three o'clock</p>
          </div>

          <div className="popup-location">
            <p className="popup-at">at</p>
            <p className="popup-venue">Mirli</p>
            <p className="popup-address">Heinratsberg 69, 3011 Irenental</p>
          </div>

          <div className="popup-divider bottom"></div>

          <p className="popup-rsvp">RSVP by 15th April 2026</p>

          <button onClick={closePopup} className="popup-enter-btn">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitationPopup;

