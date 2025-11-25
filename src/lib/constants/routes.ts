export interface HomeRoute {
  path: string;
  label: string;
}

export const HOME_ROUTE: HomeRoute = {
  path: '/',
  label: 'Home',
} as const;

export const ROUTES = [
  {
    slug: 'about',
    path: '/about',
    label: 'About',
    description: '나에 대한 소개',
  },
  {
    slug: 'cases',
    path: '/cases',
    label: 'Cases',
    description: '실무/작업 하이라이트',
  },
  {
    slug: 'contact',
    path: '/contact',
    label: 'Contact',
    description: '연락처와 링크',
  },
] as const;

export type RoutesType = (typeof ROUTES)[number]['slug'];

export type RoutesInterface = (typeof ROUTES)[number];
