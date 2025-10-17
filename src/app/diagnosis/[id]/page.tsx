"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import type { Diagnosis } from '@/types/types';

// --- Mock Data ---
const mockDiagnosis: Diagnosis = {
  id: '1',
  title: 'あなたの魂の色診断',
  description: 'いくつかの質問に答えるだけで、あなたの秘められた才能がわかります。',
  thumbnailImage: '/images/soul-color-thumbnail.jpg', // 仮の画像パス
  createdAt: new Date().toISOString(),
  results: [
    { resultId: 'A', title: '情熱の赤', description: 'あなたはリーダーシップと情熱に溢れています。', image: '/images/result-red.jpg' },
    { resultId: 'B', title: '冷静の青', description: 'あなたは冷静沈着で、分析力に優れた戦略家です。', image: '/images/result-blue.jpg' },
    { resultId: 'C', title: '希望の黄', description: 'あなたは常に明るく、周りに希望を与えるムードメーカーです。', image: '/images/result-yellow.jpg' }
  ],
  questions: [
    {
      text: '無人島に一つだけ持っていくなら？',
      choices: [
        { text: 'ナイフ', leadsToResultId: 'A' },
        { text: '本', leadsToResultId: 'B' },
        { text: '友達', leadsToResultId: 'C' },
      ],
    },
    {
      text: 'どちらの言葉に惹かれる？',
      choices: [
        { text: '勝利', leadsToResultId: 'A' },
        { text: '真実', leadsToResultId: 'B' },
        { text: '笑顔', leadsToResultId: 'C' },
      ],
    },
    {
      text: '困難な課題に直面した時、どうする？',
      choices: [
        { text: '真正面から突き進む', leadsToResultId: 'A' },
        { text: '計画を立てて分析する', leadsToResultId: 'B' },
        { text: '仲間と協力する', leadsToResultId: 'C' },
      ],
    },
  ],
};

// --- Component ---
export default function DiagnosisPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const diagnosis = mockDiagnosis; // In a real app, you'd fetch this based on params.id

  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleAnswer = (resultId: string) => {
    const newAnswers = [...answers, resultId];
    setAnswers(newAnswers);

    if (currentQuestionIndex < diagnosis.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // --- Task 2: Result Calculation Logic ---
      const resultCounts = newAnswers.reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const finalResultId = Object.keys(resultCounts).reduce((a, b) => resultCounts[a] > resultCounts[b] ? a : b);

      // Redirect to result page
      router.push(`/diagnosis/${params.id}/result?res=${finalResultId}`);
    }
  };

  const currentQuestion = diagnosis.questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] p-4 text-white">
      <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8">
        {!isStarted ? (
          // --- Initial View ---
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{diagnosis.title}</h1>
            <p className="text-gray-300 mb-8">{diagnosis.description}</p>
            <Button onClick={handleStart} variant="primary" className="py-3 px-8">
              診断を始める
            </Button>
          </div>
        ) : (
          // --- Question View ---
          <div>
            <div className="text-center mb-8">
              <p className="text-lg font-semibold text-gray-400 mb-2">質問 {currentQuestionIndex + 1} / {diagnosis.questions.length}</p>
              <h2 className="text-3xl font-bold">{currentQuestion.text}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {currentQuestion.choices.map((choice, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(choice.leadsToResultId)}
                  variant="secondary"
                  className="w-full !justify-start py-4 px-6 rounded-lg text-left transform hover:translate-x-2"
                >
                  {choice.text}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}