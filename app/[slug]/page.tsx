import { notFound } from 'next/navigation';

import About from '@/container/About';
import Cases from '@/container/Cases';
import Contact from '@/container/Contact';
import type { RoutesType } from '@/lib/constants/routes';

import type { ReactNode } from 'react';

const PAGE_CONFIGS = [
  { slug: 'about', title: 'About', description: 'About page' },
  { slug: 'cases', title: 'Cases', description: 'Cases page' },
  { slug: 'contact', title: 'Contact', description: 'Contact page' },
];

interface PageProps {
  params: {
    slug: string;
  };
}

const SLUG_COMPONENT_MAP: Record<RoutesType, ReactNode> = {
  about: <About />,
  cases: <Cases />,
  contact: <Contact />,
};

export default function SlugPage({ params }: PageProps) {
  const slug = params.slug as RoutesType;

  // 유효한 slug인지 체크
  const pageConfig = PAGE_CONFIGS.find((p) => p.slug === slug);
  if (!pageConfig) {
    return notFound();
  }

  const content = SLUG_COMPONENT_MAP[slug];

  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">{pageConfig.title}</h1>
        {pageConfig.description && (
          <p className="page__description">{pageConfig.description}</p>
        )}
      </header>

      <section className="page__content">{content}</section>
    </div>
  );
}
