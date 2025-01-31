import { useState } from 'react';
import { useQuiz } from './hooks/useQuiz';
import { QuizStart } from './components/QuizStart';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizSummary } from './components/QuizSummary';
import { Option } from './types/quiz';
import { Loader2 } from 'lucide-react';

function App() {
  const { quiz, loading, error } = useQuiz();
  const [gameState, setGameState] = useState<'start' | 'playing' | 'summary'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [answers, setAnswers] = useState<{ questionId: number; correct: boolean }[]>([]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (error || !quiz) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error || 'Failed to load quiz'}</p>
        </div>
      </div>
    );
  }

  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    const isCorrect = option.is_correct;
    
    setAnswers([...answers, { questionId: quiz.questions[currentQuestionIndex].id, correct: isCorrect }]);

    setTimeout(() => {
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        setGameState('summary');
      }
    }, 1000);
  };

  const calculatePoints = () => {
    const correctAnswers = answers.filter(answer => answer.correct);
    const incorrectAnswers = answers.filter(answer => !answer.correct);

    return correctAnswers.length * quiz.correct_answer_marks - incorrectAnswers.length * quiz.negative_marks
  };

  const correctAnswers = answers.filter(answer => answer.correct).length;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {gameState === 'start' && (
        <QuizStart quiz={quiz} onStart={handleStart} />
      )}

      {gameState === 'playing' && (
        <QuizQuestion
          question={quiz.questions[currentQuestionIndex]}
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quiz.questions.length}
        />
      )}

      {gameState === 'summary' && (
        <QuizSummary
          totalQuestions={quiz.questions.length}
          correctAnswers={correctAnswers}
          points={calculatePoints()}
          onRestart={handleStart}
        />
      )}
    </div>
  );
}

export default App;