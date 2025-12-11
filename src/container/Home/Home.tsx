'use client';

import AboutList from '@/components/AboutList';
import { ABOUT_DESCRIPTION, ABOUT_TITLE } from '@/lib/constants/about';

import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{ABOUT_TITLE}</h2>
        <p className={styles.description}>{ABOUT_DESCRIPTION}</p>
        <AboutList />
      </div>
    </section>
  );
}
