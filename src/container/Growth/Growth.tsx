'use client';

import { GROWTH_DESCRIPTION, GROWTH_TITLE } from '@/lib/constants/growth';

import styles from './Growth.module.css';

export default function Growth() {
  return (
    <section className={styles.growth}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{GROWTH_TITLE}</h2>
        <p className={styles.description}>{GROWTH_DESCRIPTION}</p>
      </div>
    </section>
  );
}
