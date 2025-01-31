import React from 'react';
import { Trophy, Timer, Award } from 'lucide-react';
import { Quiz } from '../types/quiz';

interface QuizStartProps {
  quiz: Quiz;
  onStart: () => void;
}

export const QuizStart: React.FC<QuizStartProps> = ({ quiz, onStart }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{quiz.title}</h1>
        <p className="text-gray-600">{quiz.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
          <Timer className="w-6 h-6 text-blue-500 mr-2" />
          <span className="text-blue-800">{quiz.duration} minutes</span>
        </div>
        <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg">
          <Trophy className="w-6 h-6 text-green-500 mr-2" />
          <span className="text-green-800">{quiz.questions_count} Questions</span>
        </div>
        <div className="flex items-center justify-center p-4 bg-purple-50 rounded-lg">
          <Award className="w-6 h-6 text-purple-500 mr-2" />
          <span className="text-purple-800">{quiz.coin_count} Coins</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Quiz Rules:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>You have {quiz.duration} minutes to complete the quiz</li>
          <li>Each correct answer earns you {quiz.correct_answer_marks} points</li>
          <li>Wrong answers deduct {quiz.negative_marks} points</li>
          <li>You have {quiz.lives || 'unlimited'} lives</li>
        </ul>
      </div>

      <button
        onClick={onStart}
        className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
      >
        Start Quiz
      </button>
    </div>
  );
};