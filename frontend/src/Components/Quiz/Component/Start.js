import React, { useContext } from 'react';
import DataContext from '../Context/dataContext';
import './Start.css'; // Import the updated CSS file

const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);
    return (
        <section className={`start-section ${showStart ? 'd-block' : 'd-none'}`}>
            <div className="start-container">
                <div className="start-content">
                    <h1 className='start-title'>Test your cultural knowledge!</h1>
                    <button onClick={startQuiz} className="start-button">Start Quiz</button>
                </div>
            </div>
        </section>
    );
};

export default Start;