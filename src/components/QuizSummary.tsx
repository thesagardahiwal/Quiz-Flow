import React from 'react';
import { Trophy, Target, XCircle } from 'lucide-react';

interface QuizSummaryProps {
  totalQuestions: number;
  correctAnswers: number;
  points: number;
  onRestart: () => void;
}

export const QuizSummary: React.FC<QuizSummaryProps> = ({
  totalQuestions,
  correctAnswers,
  points,
  onRestart,
}) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  console.log(points);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-block p-4 rounded-full bg-blue-50 mb-4">
          <Trophy className="w-12 h-12 text-blue-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h1>
        <p className="text-gray-600">Here's how you performed</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-xl text-center">
          <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-800 mb-1">{percentage}%</div>
          <div className="text-green-600">Accuracy</div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl text-center">
          <Trophy className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-800 mb-1">{points}</div>
          <div className="text-blue-600">Points Earned</div>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl text-center">
          <XCircle className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-800 mb-1">
            {totalQuestions - correctAnswers}
          </div>
          <div className="text-purple-600">Questions Missed</div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};