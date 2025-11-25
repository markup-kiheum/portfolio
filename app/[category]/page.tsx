import type { ReactNode } from 'react';

import { notFound } from 'next/navigation';

import About from '@/container/About';
import Cases from '@/container/Cases';
import Contact from '@/container/Contact';
import { ROUTES } from '@/lib/constants/routes';
import type { RoutesType } from '@/lib/constants/routes';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CATEGORY_COMPONENTS: Record<RoutesType, ReactNode> = {
  about: <About />,
  cases: <Cases />,
  contact: <Contact />,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ROUTES.map((route) => ({
    category: route.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!(category in CATEGORY_COMPONENTS)) {
    notFound();
  }

  const Component = CATEGORY_COMPONENTS[category as RoutesType];

  return Component;
}
