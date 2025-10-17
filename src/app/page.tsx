import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

// 将来的にはSupabaseから取得するデータ（仮のデータ）
const mockPopularDiagnoses = [
  {
    id: "1",
    title: "あなたの魂の色診断",
    description:
      "いくつかの質問に答えるだけで、あなたの秘められた才能がわかります。",
    thumbnailImage: "/sample1.jpg",
  },
  {
    id: "2",
    title: "超精密！恋愛性格アナライザー",
    description: "あなたの恋愛パターンを徹底分析。相性の良いタイプは？",
    thumbnailImage: "/sample2.jpg",
  },
  {
    id: "3",
    title: "もしあなたが武将だったら？診断",
    description: "戦国時代の武将に例えて、あなたのリーダーシップを診断します。",
    thumbnailImage: "/sample3.jpg",
  },
];

const categories = [
  "恋愛",
  "性格診断",
  "ネタ・おもしろ",
  "仕事運",
  "心理テスト",
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ヒーローセクション */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          あなただけの運命を見つけよう
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          みんなで作る、新感覚の占い・診断サイト
        </p>
      </section>

      {/* 人気ランキングセクション */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          🔥 人気ランキング
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPopularDiagnoses.map((diag) => (
            <Card
              key={diag.id}
              href={`/diagnosis/${diag.id}`}
              title={diag.title}
              description={diag.description}
              thumbnailImage={diag.thumbnailImage}
            />
          ))}
        </div>
      </section>

      {/* 新着診断セクション (今回は人気ランキングと同じデータを表示) */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-white mb-6">✨ 新着の診断</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPopularDiagnoses
            .slice()
            .reverse()
            .map((diag) => (
              <Card
                key={diag.id}
                href={`/diagnosis/${diag.id}`}
                title={diag.title}
                description={diag.description}
                thumbnailImage={diag.thumbnailImage}
              />
            ))}
        </div>
      </section>

      {/* カテゴリーセクション */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          📂 カテゴリーから探す
        </h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Button key={category} variant="secondary">
              {category}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}
