import { ResearchInfo } from '../types';
import { affiliationLinks } from './profile';

export const researchData: ResearchInfo = {
  title: '父親の家族に関する内省支援手法のデザイン',
  field: 'Human-Computer Interaction (HCI) / Human-AI Interaction / 人間中心設計',
  affiliation: '大学院 修士課程（エンジニアリングデザインコース / 中谷研究室）',
  summary:
    '父親が日々の生活の中で家族との関係や自身の価値観を振り返り、今後の関わり方を捉え直すための内省支援手法を研究しています。',
  background:
    '仕事と家庭の両立や家族との関わり方において多様な葛藤を抱えやすい一方、自身の感情やパートナー・家族との関係性を立ち止まって振り返る機会や手段は限られています。本研究では、日常の中で無理なく自己や家族と向き合える問いの設計とインタラクションのあり方を検討しています。',
  currentApproach: [
    '内省支援・家族間コミュニケーション・感情表出に関する先行研究の調査と整理',
    '実践者・当事者へのインタビューを通じた、内省のハードルや日常の文脈の把握',
    '内省を促す問いかけの設計、他者視点（パートナー・家族視点）の取り入れ方、記録時の心理的負担の検討',
  ],
  futurePlan: [
    'ジャーナリング支援システム「Reflectia」や対話型プロトタイプを用いた支援手法の試作・実験',
    '実際の利用者を対象とした利用調査・インタビューを通じた評価と改善',
  ],
  links: affiliationLinks,
};
