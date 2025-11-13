import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const FeedbackMessage = ({ isCorrect, feedback }) => {
  return (
    <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
      <div className="flex items-start gap-3">
        {isCorrect ? (
          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
        ) : (
          <XCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
        )}
        <div>
          <div className={`font-bold mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? 'Correto!' : 'Incorreto'}
          </div>
          <div className="text-gray-700">
            {feedback}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackMessage;
