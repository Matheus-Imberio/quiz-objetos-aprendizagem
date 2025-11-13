import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const AnswerButton = ({ 
  answer, 
  isCorrect, 
  isSelected, 
  isWrong, 
  showFeedback, 
  onClick 
}) => {
  let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all ";
  
  if (!showFeedback) {
    buttonClass += "border-gray-300 hover:border-indigo-400 hover:bg-indigo-50";
  } else if (isCorrect) {
    buttonClass += "border-green-500 bg-green-50";
  } else if (isWrong) {
    buttonClass += "border-red-500 bg-red-50";
  } else {
    buttonClass += "border-gray-300 bg-gray-50 opacity-50";
  }

  return (
    <button
      onClick={onClick}
      disabled={showFeedback}
      className={buttonClass}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-800">{answer}</span>
        {showFeedback && isCorrect && (
          <CheckCircle className="text-green-500" size={24} />
        )}
        {showFeedback && isWrong && (
          <XCircle className="text-red-500" size={24} />
        )}
      </div>
    </button>
  );
};

export default AnswerButton;
