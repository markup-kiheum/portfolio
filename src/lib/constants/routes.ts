export interface HomeRoute {
  slug: string;
  path: string;
  label: string;
}

export const ROUTES = [
  {
    slug: 'home',
    path: '/',
    label: 'Home',
    description: '',
  },
  {
    slug: 'playground',
    path: '/playground',
    label: 'Playground',
    description: '프론트엔드 전반을 실험하고 배우는 공간입니다.',
  },
  {
    slug: 'blog',
    path: '/blog',
    label: 'Blog',
    description: '생각과 배운 점을 정리합니다.',
  },
] as const;

export type RoutesType = (typeof ROUTES)[number]['slug'];

export type RoutesInterface = (typeof ROUTES)[number];
