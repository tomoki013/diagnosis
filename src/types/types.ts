/**
 * 診断結果の単一パターンを定義する型
 */
export type DiagnosisResult = {
  resultId: string; // 結果を識別するためのID (例: 'A', 'B', 'res-1')
  title: string;
  description: string;
  image?: string; // 結果の画像のURL (任意)
};

/**
 * 質問内の単一の選択肢を定義する型
 */
export type Choice = {
  text: string;
  leadsToResultId: string; // この選択肢がどの`resultId`に繋がるか
};

/**
 * 単一の質問を定義する型
 */
export type Question = {
  text: string;
  choices: Choice[];
};

/**
 * 「診断」全体の構造を定義する型
 */
export type Diagnosis = {
  id: string; // 診断全体を識別する一意のID
  title: string;
  description: string;
  thumbnailImage?: string; // サムネイル画像のURL (任意)
  createdAt: string; // ISO 8601 形式の日時文字列
  results: DiagnosisResult[];
  questions: Question[];
};
