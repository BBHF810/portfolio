import { ResearchInfo } from '../types';
import { affiliationLinks } from './profile';

export const researchData: ResearchInfo = {
  title: '父親の家族に関する内省支援手法のデザイン',
  field: 'Human-Computer Interaction (HCI) / Human-AI Interaction / 人間中心設計',
  affiliation: '大学院 修士課程（エンジニアリングデザインコース / 中谷研究室）',
  researchQuestion:
    '父親が家族との関わりや自身の価値観を捉え直すために、どのような問いとインタラクションが内省を支援できるか',
  target: '乳幼児を育てる父親と家族',
  method:
    '先行研究、インタビュー、記述ワーク、プロトタイピング、ユーザーテスト、質的分析',
  currentStatus: 'ワークとシステムの試作、実験設計、利用者調査を進行中',
  systemRelationNote:
    '本研究における内省支援の問いかけや夫婦間共有の仕組みを検証するため、研究・実証実験用システムとして「Reflectia」を開発・運用しています。',
  links: affiliationLinks,
};
