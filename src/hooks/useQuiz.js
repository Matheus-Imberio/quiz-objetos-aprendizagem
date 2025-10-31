import { useState } from 'react';

const useQuiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    const isCorrect = answer === questions[currentQuestion].respostaCorreta;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    
    setAnswers((prevAnswers) => [...prevAnswers, { question: currentQuestion, answer, isCorrect }]);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setAnswers([]);
  };

  const isQuizFinished = currentQuestion >= questions.length;

  return {
    currentQuestion,
    selectedAnswer,
    showFeedback,
    score,
    answers,
    isQuizFinished,
    handleAnswer,
    nextQuestion,
    resetQuiz
  };
};

export default useQuiz;
