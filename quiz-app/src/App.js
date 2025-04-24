import React, { useState } from 'react';
import './App.css';

const quizData = [
  { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], correctAnswer: 'Paris' },
  { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
  { question: 'Who wrote "Romeo and Juliet"?', options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'], correctAnswer: 'William Shakespeare' },
  { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correctAnswer: 'Jupiter' },
  { question: 'What is the boiling point of water?', options: ['90°C', '100°C', '110°C', '120°C'], correctAnswer: '100°C' },
  { question: 'Which ocean is the largest?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correctAnswer: 'Pacific' },
  { question: 'How many continents are there?', options: ['5', '6', '7', '8'], correctAnswer: '7' },
  { question: 'What gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'], correctAnswer: 'Carbon Dioxide' }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (selected) => {
    if (selectedAnswer) return; // prevent multiple clicks

    setSelectedAnswer(selected);
    if (selected === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // move to next question after delay
    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500); // 1.5 seconds delay
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setScore(0);
    setSelectedAnswer(null);
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      {showResult ? (
        <div className="result">
          <p>Your score: {score} out of {quizData.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question">
            <p>{quizData[currentQuestion].question}</p>
          </div>
          <div className="options">
            {quizData[currentQuestion].options.map((option, index) => {
              let className = "option";
              if (selectedAnswer) {
                if (option === quizData[currentQuestion].correctAnswer) {
                  className += " correct";
                } else if (option === selectedAnswer) {
                  className += " wrong";
                }
              }

              return (
                <div
                  key={index}
                  className={className}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
