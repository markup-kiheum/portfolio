export interface HomeRoute {
  slug: string;
  path: string;
  label: string;
}

export const ROUTES = [
  {
    slug: 'journey',
    path: '/journey',
    label: 'Journey',
    description: 'UI 개발자로서의 여정을 기록합니다.',
  },
  {
    slug: 'growth',
    path: '/growth',
    label: 'Growth',
    description: '개발 관련 다양한 성장 이야기를 공유합니다.',
  },
  {
    slug: 'life',
    path: '/life',
    label: 'Life',
    description: '일상 속 나의 이야기들을 담아냅니다.',
  },
] as const;

export type RoutesType = (typeof ROUTES)[number]['slug'];

export type RoutesInterface = (typeof ROUTES)[number];
