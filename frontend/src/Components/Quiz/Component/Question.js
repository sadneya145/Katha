import React, { useState, useContext } from 'react';
import './Question.css';
import DataContext from '../Context/dataContext';

const Question = () => {
    const { 
        showQuiz, 
        question, 
        quizs, 
        checkAnswer, 
        correctAnswer,
        selectedAnswer, 
        questionIndex, 
        nextQuestion, 
        showTheResult 
    } = useContext(DataContext);

    const [showExplanation, setShowExplanation] = useState(false);

    const handleNextQuestion = () => {
        setShowExplanation(false);
        if (questionIndex + 1 !== quizs.length) {
            nextQuestion();
        } else {
            showTheResult();
        }
    };

    return (
        <section className={`bg-dark text-white ${showQuiz ? 'd-block' : 'd-none'}`}>
            <div className="container questions">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4 bg-secondary border-secondary">
                            <div className="d-flex justify-content-between gap-md-3 ">
                                <h5 className='mb-2'>{question?.question}</h5>
                                <h5 className='text-success' style={{ width: '100px', textAlign: 'right' }}>
                                    {quizs.indexOf(question) + 1} / {quizs?.length}
                                </h5>
                            </div>
                            <div>
                                {
                                    question?.options?.map((item, index) => (
                                        <button
                                            key={index}
                                            className={`w-100 text-start btn btn-dark py-2 px-3 mt-3 rounded ${correctAnswer === item ? 'bg-success' : ''}`}
                                            onClick={(event) => {
                                                checkAnswer(event, item);
                                                if (correctAnswer !== item) setShowExplanation(true);
                                            }}
                                        >
                                            {item}
                                        </button>
                                    ))
                                }
                            </div>

                            <button
                                className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold'
                                onClick={handleNextQuestion}
                                disabled={!selectedAnswer}
                            >
                                {questionIndex + 1 !== quizs.length ? 'Next Question' : 'Show Result'}
                            </button>

                            {showExplanation && (
                                <div className="explanation-box visible">
                                    <p>Correct answer: {correctAnswer}. {question?.explanation}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;