import React from 'react';
import './CalPopup.css';

const CalPopup = ({ festivalName, festivalInfo, onClose }) => {
    return (
        <div className="cal-popup-overlay">
            <div className="cal-popup-content">
                <h2>{festivalName}</h2>
                <p>{festivalInfo}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default CalPopup;