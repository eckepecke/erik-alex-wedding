
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

    <div className="popup-inner">
      {/* Background image */}
      <img 
        src="/assets/alex_card.jpeg" 
        alt="Wedding couple" 
        className="popup-background"
      />
      <div className="popup-overlay-gradient"></div>

      {/* Content wrapper with border */}
      <div className="popup-content-wrapper">
        <div className="popup-content">
          {/* <button onClick={closePopup} className="popup-enter-btn">
            Enter
          </button> */}
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default WeddingInvitationPopup;