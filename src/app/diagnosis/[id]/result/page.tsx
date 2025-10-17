import type { Diagnosis, DiagnosisResult } from '@/types/types';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// --- Mock Data (same as the diagnosis page) ---
// In a real application, this would be fetched from a shared utility or API
const mockDiagnosis: Diagnosis = {
  id: '1',
  title: 'あなたの魂の色診断',
  description: 'いくつかの質問に答えるだけで、あなたの秘められた才能がわかります。',
  thumbnailImage: '/images/soul-color-thumbnail.jpg',
  createdAt: new Date().toISOString(),
  results: [
    { resultId: 'A', title: '情熱の赤', description: 'あなたはリーダーシップと情熱に溢れています。', image: '/images/result-red.jpg' },
    { resultId: 'B', title: '冷静の青', description: 'あなたは冷静沈着で、分析力に優れた戦略家です。', image: '/images/result-blue.jpg' },
    { resultId: 'C', title: '希望の黄', description: 'あなたは常に明るく、周りに希望を与えるムードメーカーです。', image: '/images/result-yellow.jpg' }
  ],
  questions: [
    // Questions are not needed here, but kept for consistency of the type
    { text: '...', choices: [] },
  ],
};


// --- Component ---
export default function ResultPage({ params, searchParams }: {
  params: { id: string };
  searchParams: { res?: string };
}) {
  const diagnosis = mockDiagnosis; // Fetch based on params.id in a real app
  const resultId = searchParams.res;

  const result: DiagnosisResult | undefined = diagnosis.results.find(
    (r) => r.resultId === resultId
  );

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] p-4 text-white">
        <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">結果が見つかりません</h1>
          <p className="text-gray-400 mb-6">指定された結果IDは無効です。</p>
          <Link href="/">
            <Button variant="primary">
              ホームに戻る
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] p-4 text-white">
      <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
        <p className="text-lg font-semibold text-gray-400 mb-2">あなたの診断結果は...</p>
        <h1 className="text-5xl font-bold text-purple-400 mb-6">{result.title}</h1>
        {result.image && (
          <div className="mb-6 rounded-lg overflow-hidden">
             {/* Using a placeholder for the image as it's not a real file */}
            <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500">Image: {result.image}</span>
            </div>
          </div>
        )}
        <p className="text-xl text-gray-200 mb-8">{result.description}</p>
        <Link href={`/diagnosis/${params.id}`}>
          <Button variant="primary" className="py-3 px-8">
            もう一度診断する
          </Button>
        </Link>
      </div>
    </div>
  );
}