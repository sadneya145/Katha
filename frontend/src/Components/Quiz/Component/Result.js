import React, { useContext } from 'react';
import DataContext from '../Context/dataContext';

const Result = () => {
    const { showResult, quizs, marks, startOver } = useContext(DataContext);

    // Calculate the total number of questions
    const totalQuestions = quizs.length;
    // Calculate the number of correct answers
    const pointsPerQuestion = 5; // Assuming each correct answer is worth 5 points
    const correctAnswers = marks / pointsPerQuestion; // Calculate correct answers based on marks

    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${correctAnswers > (totalQuestions / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{correctAnswers > (totalQuestions / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>
                                {correctAnswers <= 5
                                    ? `You only got ${correctAnswers} questions correct out of ${totalQuestions}`
                                    : `Great work, you got ${correctAnswers} questions correct out of ${totalQuestions}`}
                            </h3>

                            <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>
                                Start Over
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;