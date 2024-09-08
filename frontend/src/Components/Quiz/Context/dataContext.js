import { createContext, useState, useEffect } from "react";

// Create Context
const DataContext = createContext({});

// Provider Component
export const DataProvider = ({ children }) => {
  // State for quiz data and current question
  const [quizs, setQuizs] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [marks, setMarks] = useState(0);

  // Display control states
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Fetch quiz data from JSON file
  useEffect(() => {
    fetch('quiz.json')
      .then(res => res.json())
      .then(data => setQuizs(data))
      .catch(err => console.error("Error fetching quiz data:", err));
  }, []);

  // Set the current question based on the questionIndex
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuestion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  // Start the quiz
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  // Check the selected answer
  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      const isCorrect = selected === question.answer;
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);

      if (isCorrect) {
        event.target.classList.add('bg-success');
        setMarks(marks + 5);
      } else {
        event.target.classList.add('bg-danger');
      }
    }
  };

  // Move to the next question
  const nextQuestion = () => {
    // Remove styles from previous answers
    document.querySelector('button.bg-danger')?.classList.remove('bg-danger');
    document.querySelector('button.bg-success')?.classList.remove('bg-success');

    setCorrectAnswer('');
    setSelectedAnswer('');
    setQuestionIndex(questionIndex + 1);
  };

  // Show the result of the quiz
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  };

  // Restart the quiz
  const startOver = () => {
    // Remove styles from previous answers
    document.querySelector('button.bg-danger')?.classList.remove('bg-danger');
    document.querySelector('button.bg-success')?.classList.remove('bg-success');

    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer('');
    setSelectedAnswer('');
    setQuestionIndex(0);
    setMarks(0);
  };

  return (
    <DataContext.Provider value={{
      startQuiz,
      showStart,
      showQuiz,
      question,
      quizs,
      checkAnswer,
      correctAnswer,
      selectedAnswer,
      questionIndex,
      nextQuestion,
      showTheResult,
      showResult,
      marks,
      startOver
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;