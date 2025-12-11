'use client';

import JourneyList from '@/components/JourneyList';
import { JOURNEY_DESCRIPTION, JOURNEY_TITLE } from '@/lib/constants/journey';

import styles from './Journey.module.css';

export default function Journey() {
  return (
    <section className={styles.journey}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{JOURNEY_TITLE}</h2>
        <p className={styles.description}>{JOURNEY_DESCRIPTION}</p>
        <JourneyList />
      </div>
    </section>
  );
}
