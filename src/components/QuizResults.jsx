import React from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const QuizResults = ({ score, totalQuestions, answers, questions, onReset }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-8">
        <h1 className="text-3xl font-bold text-center text-indigo-900 mb-6">
          Questionário Concluído! 🎉
        </h1>
        
        <div className="bg-indigo-50 rounded-xl p-6 mb-6 text-center">
          <div className="text-5xl font-bold text-indigo-600 mb-2">
            {score}/{totalQuestions}
          </div>
          <div className="text-xl text-gray-700">
            {percentage}% de acertos
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Suas Respostas:</h2>
          <div className="space-y-3">
            {answers.map((ans, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                {ans.isCorrect ? (
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                ) : (
                  <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                )}
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-sm">
                    Questão {idx + 1}
                  </div>
                  <div className="text-sm text-gray-600">
                    Sua resposta: <span className={ans.isCorrect ? 'text-green-600' : 'text-red-600'}>
                      {ans.answer}
                    </span>
                    {!ans.isCorrect && (
                      <span className="text-gray-500">
                        {' '}(Correta: {questions[ans.question].respostaCorreta})
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onReset}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw size={20} />
          Refazer Questionário
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
