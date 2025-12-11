export const ROUTES = [
  {
    slug: 'home',
    path: '/',
    label: 'Home',
    description: '자문자답 형식의 소개 페이지입니다.',
  },
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
] as const;

export type RoutesType = (typeof ROUTES)[number]['slug'];

export type RoutesInterface = (typeof ROUTES)[number];
