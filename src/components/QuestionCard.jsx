import React from 'react';
import AnswerButton from './AnswerButton';
import FeedbackMessage from './FeedbackMessage';

const QuestionCard = ({ 
  question, 
  currentQuestionIndex, 
  totalQuestions,
  score,
  selectedAnswer,
  showFeedback,
  onAnswerSelect,
  onNextQuestion,
  isLastQuestion
}) => {
  const isCorrect = selectedAnswer === question.respostaCorreta;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-indigo-600">
              Questão {currentQuestionIndex + 1} de {totalQuestions}
            </span>
            <span className="text-sm font-semibold text-gray-600">
              Pontuação: {score}/{currentQuestionIndex}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 whitespace-pre-wrap">
          {question.pergunta}
        </h2>

        <div className="space-y-3 mb-6">
          {question.alternativas.map((alt, idx) => (
            <AnswerButton
              key={idx}
              answer={alt}
              isCorrect={alt === question.respostaCorreta}
              isSelected={alt === selectedAnswer}
              isWrong={alt === selectedAnswer && alt !== question.respostaCorreta}
              showFeedback={showFeedback}
              onClick={() => onAnswerSelect(alt)}
            />
          ))}
        </div>

        {showFeedback && (
          <FeedbackMessage 
            isCorrect={isCorrect}
            feedback={question.feedback}
          />
        )}

        {showFeedback && onNextQuestion && (
          <button
            onClick={onNextQuestion}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {isLastQuestion ? 'Ver Resultado' : 'Próxima Questão'}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
