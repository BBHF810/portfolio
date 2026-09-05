import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'shiburin-note',
    title: 'しぶりんファシリテーター',
    subtitle: 'きょうだい児ワークショップ進行ナビ＆記録Webアプリ',
    category: ['featured', 'ui-ux'],
    period: '2024 - 2025',
    role: 'UI/UX Design & Frontend Development',
    accentColor: '#10b981', // emerald
    summary: '障がいのある兄弟姉妹を持つ「きょうだい児」向けワークショップの進行をサポートし、対話と感情の推移を直感的に記録・可視化するナビゲーションツール。',
    background: 'ワークショップの現場では、参加者の発言や感情の揺れ動きをリアルタイムに拾い上げ、安心できる空間を作ることが求められます。進行役（ファシリテーター）が操作に気を取られず、参加者との対話に100%集中できるUIを目指して開発しました。',
    targetUser: 'ワークショップ進行役（ファシリテーター）、きょうだい児の参加者',
    designHighlights: [
      '心理的安全性を高めるため、角丸を基調としたやわらかなコンポーネントと「Zen Maru Gothic」フォントを採用',
      '現在のアジェンダ・残り時間・次のステップが一目でわかるステータスバー設計',
      '発言やワークの記録をChart.jsを用いてリアルタイムにグラフ化し、振り返りを容易にするビジュアライゼーション'
    ],
    techHighlights: [
      'Vanilla JavaScriptによる軽量でレスポンスの速いSPA構成',
      'Firebase (Firestore/Auth) を活用したリアルタイムデータ同期とアカウント管理',
      'Chart.jsの動的データバインディングによるインタラクティブなチャート描画'
    ],
    features: [
      'ステップ別ワークショップ進行ナビゲーション',
      'リアルタイムログ記録・感情チャート表示',
      'アカウント・セッション管理（Firebase連携）',
      '進行タイマーとアラート機能'
    ],
    tags: ['JavaScript', 'HTML5/CSS3', 'Chart.js', 'Firebase', 'UI/UX Design'],
    githubUrl: 'https://github.com/BBHF810/shiburin-note',
  },
  {
    id: 'banquet-record',
    title: 'Banquet Record',
    subtitle: '宴会診断＆買い出しマネジメントWebアプリ',
    category: ['featured', 'ui-ux', 'tool'],
    period: '2025',
    role: 'Planning, UI/UX Design & Frontend',
    accentColor: '#6366f1', // indigo
    summary: '宅飲みやサークル宴会の幹事の負担を激減させる、インタラクティブなタイプ診断・プランニング・買い出しリスト自動計算アプリ。',
    background: '飲み会や宅飲みの幹事は「誰がどれくらい飲むか」「予算と買い出し量のバランス」の計算に多くの時間とストレスを抱えています。この課題をステップ形式のスマートなUIで誰でも数分で解決できるように設計しました。',
    targetUser: 'サークル幹事、宅飲み主催者、友人グループ',
    designHighlights: [
      '迷わず直感的に回答できるカード選択式のステップ診断UI',
      '人数やアルコール強度を選ぶだけで即座に買い出し量・概算予算が更新されるリアクティブUI',
      'Lucide Reactのアイコンとモダンなカードレイアウトによる視認性の高いダッシュボード'
    ],
    techHighlights: [
      'React 19 + Viteによる最新の高速フロントエンド構成',
      'React Routerによるシームレスな画面遷移',
      '診断結果に応じた動的な買い出し量算出ロジックとローカルストレージ連携'
    ],
    features: [
      '飲み会タイプ＆ホストプラン診断機能',
      '参加人数・予算に応じた買い出しアイテム自動計算',
      'マイページでの過去の宴会履歴管理',
      'インタラクティブなチェックリスト'
    ],
    tags: ['React 19', 'Vite', 'TypeScript', 'React Router', 'Lucide React', 'UI/UX Design'],
    githubUrl: 'https://github.com/BBHF810/banquet-record',
  },
  {
    id: 'michino',
    title: 'みちのきろく',
    subtitle: '自由室みちの 学習記録＆コワーキングスペース予約アプリ',
    category: ['featured', 'ui-ux', 'tool'],
    period: '2025',
    role: 'UI/UX Design, Frontend & Supabase Integration',
    accentColor: '#0ea5e9', // sky
    summary: 'コワーキング＆学習スペース「自由室みちの」の学生向け学習記録と、社会人向け利用予約を1つの直感的なカレンダーUIに統合したプラットフォーム。',
    background: '学生の学習ログ管理と、社会人のスペース予約という異なるペルソナの要望を1つのWebアプリでスマートに共存させる必要がありました。複雑になりがちなカレンダーUIを整理し、誰でも直感的に操作できるデザインを追求しました。',
    targetUser: '施設利用の学生・社会人、施設管理者',
    designHighlights: [
      '学習カレンダーとスペース予約を切り替え可能なデュアルモードUI',
      'Tailwind CSSを活用したミニマルで落ち着いた学習環境に寄り添うカラースキーム',
      'Gemini APIを活用した学習アドバイスのフィードバックカード表示'
    ],
    techHighlights: [
      'React (Vite) + TypeScript による型安全なコンポーネント設計',
      'Supabase（PostgreSQL, Auth, RLS）によるセキュアなデータ永続化',
      'Google Gemini APIとの連携によるAI学習支援機能'
    ],
    features: [
      '日々の学習内容・時間の記録とグラフ可視化',
      'カレンダーベースのコワーキングスペース予約管理',
      'Supabase認証＆リアルタイムDB同期',
      'Gemini APIによる学習アシスト'
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Gemini API', 'UI/UX Design'],
    githubUrl: 'https://github.com/BBHF810/michino',
  },
  {
    id: 'feeling',
    title: 'きもちパレット (Kimochi Palette)',
    subtitle: '感情をカラーとAIで可視化・対話するエモーショナルUI',
    category: ['ui-ux', 'ai-app'],
    period: '2025',
    role: 'Concept Design, UI/UX & AI Prompt Engineering',
    accentColor: '#ec4899', // pink
    summary: '言葉にしづらい心の状態や気分を「色」と「対話」を通じて表現・言語化し、自己理解を深める感情ケアWebアプリケーション。',
    background: '「今の気分を言語化してください」と言われても難しいユーザーに対し、色の直感的な選択から入り、AIが優しく壁打ち相手になってくれる新しいインターフェース体験（エモーショナルデザイン）を形にしました。',
    targetUser: '気持ちの整理をしたい人、自己対話を行いたいユーザー',
    designHighlights: [
      '色彩心理に基づいた美しいグラデーションパレットとインタラクティブなカラーピッカー',
      '心理的な圧迫感のない余白感と心地よいトランジションアニメーション',
      '感情ログをパレット履歴としてコレクションできるカードデザイン'
    ],
    techHighlights: [
      'React 19 + Vite + TypeScript による最新環境での開発',
      'Google GenAI SDK (@google/genai) を用いたGemini APIとのリアルタイム感情対話',
      '感情パラメータに基づくダイナミックCSSテーマ切り替え'
    ],
    features: [
      'カラーパレット選択による感情入力',
      'Gemini APIを活用した優しい共感＆対話機能',
      '気持ちの移り変わりを振り返るパレットアーカイブ'
    ],
    tags: ['React 19', 'TypeScript', 'Gemini API', 'UI/UX Design', 'Emotional Design'],
    githubUrl: 'https://github.com/BBHF810/feeling',
  },
  {
    id: 'arata',
    title: 'Galactic Splat Kids',
    subtitle: '3D Splat Action & インタラクティブ WebGL体験',
    category: ['threejs', 'ui-ux'],
    period: '2025',
    role: '3D Scene Design & Frontend Engineering',
    accentColor: '#f59e0b', // amber
    summary: 'React Three FiberとThree.jsを活用した、ブラウザ上で滑らかに動作する3D空間アクション・クリエイティブWeb体験。',
    background: '従来の2次元UIにとどまらず、WebGL/3D技術を用いたリッチな空間表現とWebフロントエンド技術の融合を探求。軽量かつ爽快な操作性をWebブラウザ上で実現することを目指しました。',
    targetUser: 'Web上でリッチな3Dインタラクションを楽しみたいユーザー',
    designHighlights: [
      'ポップで躍動感のある3Dオブジェクト配置とカメラワーク設計',
      '3Dワールドと調和する未来的かつクリーンなHUD / UIオーバーレイ',
      'ポストプロセッシング（ブルーム、トーンマッピング）による高品質なビジュアル演出'
    ],
    techHighlights: [
      'React 19 + Three.js + @react-three/fiber + @react-three/drei による宣言的3D構築',
      'postprocessing によるシェーダーエフェクトの最適化',
      'Tailwind CSS によるレスポンシブな操作パネルとゲームUIの統合'
    ],
    features: [
      '3Dキャラクター＆オブジェクトのリアルタイムインタラクション',
      'カメラコントロールとライティング演出',
      'ブラウザ環境に最適化されたフレームレート制御'
    ],
    tags: ['React 19', 'Three.js', 'React Three Fiber', 'WebGL', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/BBHF810/arata',
  },
  {
    id: 'ranking',
    title: 'AceRank',
    subtitle: '大学バドミントンサークル向け レーティング・ランキングシステム',
    category: ['tool', 'ui-ux'],
    period: '2025',
    role: 'UI/UX Design, DB Design & Frontend',
    accentColor: '#3b82f6', // blue
    summary: '体育館や練習場でのスマホ操作に特化した、バドミントン部・サークルの試合結果記録＆自動レート計算システム。',
    background: '紙やExcelで行われがちだったサークル内の順位付けや試合結果管理を、練習合間にスマホ片手で3秒で入力・確認できるUIへと刷新しました。',
    targetUser: '大学バドミントンサークルの幹事・部員',
    designHighlights: [
      '指が届きやすいボトムナビゲーションと大きなタップターゲット',
      '勝敗に応じたレーティング推移がひと目でわかるビジュアルランキング',
      '対戦相手のクイック検索とスムーズなスコア入力フォーム'
    ],
    techHighlights: [
      'React 19 + TypeScript + Vite による軽快なPWAライクな動作',
      'Supabase Realtime による対戦結果の即時同期',
      'イロレーティング（Elo rating）アルゴリズムの実装'
    ],
    features: [
      'スマホ特化のクイックスコア入力',
      'Eloレーティングに基づくランキング自動算出',
      '個人戦績・対戦履歴のダッシュボード表示'
    ],
    tags: ['React 19', 'TypeScript', 'Supabase', 'Vite', 'UI/UX Design'],
    githubUrl: 'https://github.com/BBHF810/ranking',
  },
  {
    id: 'propose',
    title: 'Propose',
    subtitle: 'WebRTC P2P リアルタイム対話＆プロポーザルプラットフォーム',
    category: ['tool'],
    period: '2025',
    role: 'Fullstack & Realtime Network Design',
    accentColor: '#8b5cf6', // purple
    summary: 'Next.js 16とPeerJS（WebRTC）を活用し、低遅延かつセキュアなP2P通信でリアルタイムな情報共有を実現するコラボレーションツール。',
    background: '中央サーバーの負荷や遅延を抑えつつ、ユーザー間でダイレクトにアイデアを共有・提案し合える高速なリアルタイムコミュニケーション基盤を構築しました。',
    targetUser: 'チームメンバー、コラボレーター',
    designHighlights: [
      '接続状態（接続中・待機中・通信中）が直感的にわかるステータスインジケーター',
      'Next.js Geistフォントを採用した洗練されたミニマルインターフェース'
    ],
    techHighlights: [
      'Next.js 16 (App Router) + React 19 によるSSR/SSGハイブリッド構成',
      'PeerJS によるWebRTC P2Pデータチャネルの確立とシグナリング処理',
      'Supabase によるルーム管理とメタデータ同期'
    ],
    features: [
      'P2Pによる超低遅延データ通信',
      'ルームIDベースの簡単接続',
      'Supabaseと連携した履歴・提案データ管理'
    ],
    tags: ['Next.js 16', 'React 19', 'WebRTC', 'PeerJS', 'Supabase', 'TypeScript'],
    githubUrl: 'https://github.com/BBHF810/propose',
  },
  {
    id: 'number_legend',
    title: 'ナンバー・レジェンド',
    subtitle: 'AI連携・算数知育ゲーミフィケーションWebアプリ',
    category: ['ai-app', 'tool'],
    period: '2025',
    role: 'Game Design, UI/UX & AI Integration',
    accentColor: '#14b8a6', // teal
    summary: '算数や数字の楽しさを学べる知育ゲーム。Gemini APIがユーザーの回答状況に合わせてリアルタイムにヒントや応援メッセージを生成。',
    background: '子どもや学習者が「間違えても楽しい」「次も挑戦したくなる」ポジティブな学習体験を、ゲーミフィケーションとAI対話の組み合わせでデザインしました。',
    targetUser: '小学生・算数を楽しく学びたい学習者',
    designHighlights: [
      '親しみやすくワクワクするカードUIと正解時の演出アニメーション',
      '数字の入力が楽しくなる大きなテンキー風ボタンデザイン'
    ],
    techHighlights: [
      'React 19 + TypeScript + Vite',
      'Google Gemini API による動的フィードバック＆難易度調整',
      'Lucide React アイコンを活用した視覚的ナビゲーション'
    ],
    features: [
      '算数クイズ・パズルゲームループ',
      'Geminiによる動的ヒント＆キャラクター対話',
      'スコア＆レベルアップシステム'
    ],
    tags: ['React 19', 'TypeScript', 'Gemini API', 'Gamification', 'UI/UX Design'],
    githubUrl: 'https://github.com/BBHF810/number_legend',
  },
  {
    id: 'journal_app',
    title: 'Journal App',
    subtitle: '多言語対応（i18n）・データ永続化 日記管理Webシステム',
    category: ['tool'],
    period: '2024',
    role: 'Backend & Data Modeling',
    accentColor: '#64748b', // slate
    summary: 'Python (Flask) と SQLAlchemy を用いた、国際化対応（Babel）と堅牢なDB設計を備えたジャーナル・日記管理システム。',
    background: 'フロントエンドだけでなく、堅牢なバックエンド設計・データベースモデリング・国際化対応（i18n）の知見を深めるために開発したWebアプリケーション。',
    targetUser: '多言語環境で日々の思考や日記を安全に記録したいユーザー',
    designHighlights: [
      '無駄のないクラシックで実用的なテキストエディタUI',
      '言語切り替え（日本語/英語など）のスムーズなUI'
    ],
    techHighlights: [
      'Python / Flask による軽量かつ保守性の高いRESTful API構成',
      'SQLAlchemy によるリレーショナルデータモデリング',
      'Flask-Babel による国際化（i18n / gettext）対応とパスワード暗号化（bcrypt）'
    ],
    features: [
      '日記のエントリ作成・編集・検索',
      'Flask-Babelによる多言語ローカライズ',
      'ユーザー認証とセキュアなパスワード管理'
    ],
    tags: ['Python', 'Flask', 'SQLAlchemy', 'i18n', 'Babel', 'Database Design'],
    githubUrl: 'https://github.com/BBHF810/journal_app',
  }
];
