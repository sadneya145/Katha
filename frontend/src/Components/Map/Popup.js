import React from 'react';
import './popup.css';

const Popup = ({ stateInfo, position, onClose }) => {
    return (
        <div
            className="popup"
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                position: 'absolute',
            }}
        >
            <button className="close-btn" onClick={onClose}>
                X
            </button>
            <h3>{stateInfo.title}</h3>
            <p>
                <strong>Location:</strong> {stateInfo.details.location}
            </p>
            <p>
                <strong>Major Language Spoken:</strong> {stateInfo.details.language}
            </p>
            <p>
                <strong>Famous Festival:</strong> {stateInfo.details.festival}
            </p>
            <p>
                <strong>Famous Location:</strong> {stateInfo.details.famousLocation}
            </p>
            <p>
                <strong>Fun Fact:</strong> {stateInfo.details.funFact}
            </p>
            <a
                href={stateInfo.details.link}
                target="_blank"
                rel="noopener noreferrer"
                className="more-info-link"
            >
                More Information
            </a>
        </div>
    );
};

export default Popup;