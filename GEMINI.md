1. はじめに
本ドキュメントは、ウェブアプリケーション「占い・診断館」の内部実装に関する方針を定める。外部設計書で定義された要件と仕様を、Next.jsとTypeScriptを用いたコンポーネントベースのアーキテクチャで実現するための設計を記述する。
2. ディレクトリ構成
srcディレクトリを使用し、コンポーネントを責務に応じて分割、型定義ファイルを集約するなど、保守性と拡張性を考慮した構成とする。
/ └── src/ ├── app/ │ ├── (main)/ │ │ ├── layout.tsx │ │ ├── page.tsx │ │ └── diagnosis/ │ │ └── ... │ └── api/ ├── components/ │ ├── common/ # 複数ページで利用する共通コンポーネント (Header, Footer) │ ├── features/ # 特定機能に特化したコンポーネント (RankingList, DiagnosisCreateForm) │ ├── layouts/ # ページのレイアウトを定義するコンポーネント (MainLayout) │ ├── pages/ # ページを構成するトップレベルのコンポーネント │ └── ui/ # スタイルのない汎用UIパーツ (Button, Card, Input) ├── constants/ # 定数管理 (サイト名、APIエンドポイントなど) ├── lib/ # ライブラリ連携やユーティリティ関数 (supabaseClient.ts) ├── store/ # グローバル状態管理 (Zustandなど) ├── styles/ # グローバルCSS └── types/ └── types.ts # プロジェクト全体の型定義を集約
3. コンポーネント設計
ご指定のディレクトリ構成に合わせて、コンポーネントの配置を再定義します。
/components/ui/ (汎用UIパーツ) Button.tsx, Card.tsx, Input.tsx, Textarea.tsx/components/common/ (共通コンポーネント) Header.tsx, Footer.tsx, ShareButtons.tsx/components/layouts/ (レイアウト) MainLayout.tsx: HeaderとFooterを含み、メインコンテンツを中央に配置するレイアウト。/components/features/ (機能別コンポーネント) 診断作成: DiagnosisCreateForm.tsx, BasicInfoForm.tsx, ResultsSetup.tsx, QuestionsSetup.tsx診断実行: DiagnosisRunner.tsx, QuestionCard.tsx診断結果: ResultDisplay.tsxトップページ: HeroSection.tsx, RankingList.tsx, NewDiagnosticsCarousel.tsx
4. データフローと状態管理
初期リリース版 (MVP)状態管理: React標準のフック（useState, useContext）を中心に管理する。特に「診断作成ページ」のような複雑なフォームでは、useStateを多用してユーザーの入力状態を保持する。データ永続化: ユーザーが作成した診断データは、localStorageを使用してブラウザに保存する。読み書きを行う専用のユーティリティ関数を/libに作成する。将来的な拡張ユーザー登録機能などを実装する際には、より広範囲な状態管理が必要になるため、ZustandやJotaiといった軽量なグローバル状態管理ライブラリの導入を検討する。
5. API設計とデータベース
データベース種類: Supabase (PostgreSQL) を使用する。連携方法: クライアントサイド: Supabaseが提供する公式クライアントライブラリ (@supabase/supabase-js) を使用し、データの読み書きや認証を行う。/lib/supabaseClient.ts にクライアントの設定を集約する。サーバーサイド (API Routesなど): サーバーサイドでより複雑な処理を行う場合は、PrismaをORMとして導入し、SupabaseのPostgreSQLデータベースに接続することを推奨する。API設計Supabaseのクライアントライブラリを直接フロントエンドから呼び出すことで、単純なCRUD操作はAPI Routesを介さずに実装可能とする。サーバーサイドでのみ実行したい処理（例：外部APIとの連携、複雑なデータ集計）については、引き続きNext.jsのAPI Routesを利用する。
