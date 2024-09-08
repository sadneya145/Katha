import React, { useState } from 'react';
import './Map.css';
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.js'
import Popup from './Popup';
import states from './states';

const Map = () => {
    const [hoveredState, setHoveredState] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const [selectedState, setSelectedState] = useState(null);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

    const handleMouseOver = (state, event) => {
        setHoveredState(state);
        setHoverPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOut = () => {
        setHoveredState(null);
    };

    const handleClick = (state, event) => {
        event.stopPropagation();
        setSelectedState(state);
        setClickPosition({ x: event.clientX, y: event.clientY });
    };

    const closePopup = () => {
        setSelectedState(null);
    };

    return (
        <div>
            <Navbar/>
        <div className="mapdiv" onClick={closePopup}>
          
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="svg2"
                height="695.7"
                width="611.86"
                onClick={closePopup} // Close popup on clicking outside a state
            >
                {states.map((state) =>
                    state.paths.map((pathData, index) => (
                        <path
                            key={`${state.id}-${index}`}
                            id={state.id}
                            d={pathData}
                            onMouseOver={(event) => handleMouseOver(state, event)}
                            onMouseOut={handleMouseOut}
                            onClick={(event) => handleClick(state, event)}
                            className="state-path" // Apply class for additional styling
                        />
                    ))
                )}
            </svg>
            {hoveredState && (
                <div
                    className="hover-popup"
                    style={{
                        top: `${hoverPosition.y + 10}px`,
                        left: `${hoverPosition.x + 10}px`,
                        position: 'absolute',
                    }}
                >
                    {hoveredState.title}
                </div>
            )}
            {selectedState && (
                <Popup
                    stateInfo={selectedState}
                    position={clickPosition}
                    onClose={closePopup}
                />
            )}

        </div>
        <Footer/>
        </div>
    );
};

export default Map;