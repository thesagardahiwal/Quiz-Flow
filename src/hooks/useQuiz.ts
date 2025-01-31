import { useState, useEffect } from 'react';
import { Quiz } from '../types/quiz';
import { jsonserve } from "../seedData/seed"

export const useQuiz = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        // const response = await fetch('https://api.jsonserve.com/Uw5CrX');
        // if (!response.ok) {
          // throw new Error('An error occurred');
          // Cors block error, So using seed data
        // };

        // const data: Quiz = await response.json();
        // Error: CORS block error, So using seed data

        const data : Quiz = JSON.parse(jsonserve);
        setQuiz(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, []);

  return { quiz, loading, error };
};