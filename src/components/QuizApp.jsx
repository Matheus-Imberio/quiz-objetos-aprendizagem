import React from 'react';
import { questions } from '../data/quizData';
import useQuiz from '../hooks/useQuiz';
import QuestionCard from './QuestionCard';
import QuizResults from './QuizResults';

const QuizApp = () => {
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

  if (isQuizFinished) {
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
        answers={answers}
        questions={questions}
        onReset={resetQuiz}
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
