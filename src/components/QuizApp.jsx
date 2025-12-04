import React, { useState } from 'react';
import { questions } from '../data/quizData';
import useQuiz from '../hooks/useQuiz';
import QuestionCard from './QuestionCard';
import QuizResults from './QuizResults';
import WelcomeScreen from './WelcomeScreen';

const QuizApp = () => {
  const [hasStarted, setHasStarted] = useState(false);
  
  const {
    currentQuestion,
    selectedAnswer,
    showFeedback,
    score,
    answers,
    isQuizFinished,
    handleAnswer,
    nextQuestion,
    resetQuiz
  } = useQuiz(questions);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleReset = () => {
    resetQuiz();
    setHasStarted(false);
  };

  if (!hasStarted) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (isQuizFinished) {
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
        answers={answers}
        questions={questions}
        onReset={handleReset}
      />
    );
  }

  const question = questions[currentQuestion];

  return (
    <QuestionCard
      question={question}
      currentQuestionIndex={currentQuestion}
      totalQuestions={questions.length}
      score={score}
      selectedAnswer={selectedAnswer}
      showFeedback={showFeedback}
      onAnswerSelect={handleAnswer}
      onNextQuestion={nextQuestion}
      isLastQuestion={currentQuestion === questions.length - 1}
    />
  );
};

export default QuizApp;
