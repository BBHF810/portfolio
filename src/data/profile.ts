import { ExternalResourceLink } from '../types';

export const affiliationLinks: ExternalResourceLink[] = [
  {
    label: '研究室Webページ（中谷研究室）',
    sublabel: 'nakatani.esd.titech.ac.jp',
    url: 'https://nakatani.esd.titech.ac.jp/',
  },
  {
    label: 'Future Living Lab',
    sublabel: 'futurelivinglab.org',
    url: 'https://futurelivinglab.org/',
  },
  {
    label: '所属コース（エンジニアリングデザインコース）',
    sublabel: 'www.edp.esd.i.isct.ac.jp',
    url: 'https://www.edp.esd.i.isct.ac.jp/',
  },
];

export const profile = {
  name: '高橋 治彦',
  nameEn: 'Haruhiko Takahashi',
  role: 'Human-Centered Design × Software Prototyping',
  headline: '人への理解を、使える仕組みに変えるデザインと実装',
  heroDescription:
    'ユーザー調査、課題整理、UI設計、Webアプリ開発、実運用後の改善まで一貫して取り組んでいます。',
  githubUrl: 'https://github.com/BBHF810',
  email: 'haruhiko161059@gmail.com',
  affiliationLinks,

  heroStrengths: [
    {
      label: 'User Research',
      description: '聞き取りや観察を通じた課題発見',
    },
    {
      label: 'Product Design',
      description: '要件整理、UI、対話フローの設計',
    },
    {
      label: 'Software Prototyping',
      description: 'React、TypeScript、AI API等を用いた実装と検証',
    },
  ],

  heroMetrics: [
    {
      title: '3 Web Applications',
      detail: 'みちのきろく / Reflectia / AI相互期待感インタビュー',
    },
    {
      title: 'Field / Research / Exhibition',
      detail: '現場導入・実証実験・大学祭展示での実践',
    },
    {
      title: 'Research → Design → Implementation → Improvement',
      detail: '調査から試作・実装・運用改善まで一貫して担当',
    },
  ],

  aboutIntro:
    'HCIとHuman-AI Interactionを研究しながら、現場の課題を動くWebアプリとして実装しています。聞き取りから課題を整理し、プロトタイプを実際の運用・研究・展示で検証して改善することが得意です。',

  profileItems: [
    {
      label: '現在',
      value: '大学院、エンジニアリングデザインコース、中谷研究室',
    },
    {
      label: '専門',
      value: 'HCI、Human-AI Interaction、人間中心設計',
    },
    {
      label: '関心',
      value: '内省支援、家族間コミュニケーション、対話型AI',
    },
    {
      label: '実践',
      value: '業務整理、UI設計、Webアプリ実装、現場改善',
    },
  ],

  compactProcess: [
    {
      step: 'Listen',
      title: '聞き取りと観察',
      description: '関係者や利用者の困りごとと日常の文脈を把握します。',
    },
    {
      step: 'Define',
      title: '課題整理と要件定義',
      description: '属人化や負担の原因を整理し、必要な要件を定めます。',
    },
    {
      step: 'Prototype',
      title: 'UI設計と動く試作',
      description: '利用場面に合わせた画面構成と対話フローを設計します。',
    },
    {
      step: 'Implement',
      title: 'Webアプリ実装',
      description: 'React、TypeScript、Flask、AI API等で実装します。',
    },
    {
      step: 'Validate',
      title: '現場、研究、展示での検証',
      description: '実際の運営現場や実験・展示環境で利用してもらいます。',
    },
    {
      step: 'Improve',
      title: 'フィードバックに基づく改善',
      description: '見つかった誤操作や運用課題を継続的に修正します。',
    },
  ],
};
