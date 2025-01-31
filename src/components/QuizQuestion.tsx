import React from 'react';
import { Question, Option } from '../types/quiz';

interface QuizQuestionProps {
  question: Question;
  selectedOption: Option | null;
  onSelectOption: (option: Option) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedOption,
  onSelectOption,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {question.topic}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{question.description}</h2>
        {question.photo_url && (
          <img
            src={question.photo_url}
            alt="Question"
            className="mt-4 rounded-lg w-full object-cover"
          />
        )}
      </div>

      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option)}
            className={`w-full p-4 text-left rounded-lg transition-colors duration-200 ${
              selectedOption?.id === option.id
                ? 'bg-blue-100 border-2 border-blue-500'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            }`}
          >
            <div className="flex items-start">
              <div className="flex-1">
                <p className="text-gray-800">{option.description}</p>
                {option.photo_url && (
                  <img
                    src={option.photo_url}
                    alt="Option"
                    className="mt-2 rounded-lg max-w-full h-auto"
                  />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};