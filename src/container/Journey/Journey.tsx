'use client';

import JourneyList from '@/components/JourneyList';

import styles from './Journey.module.css';

export default function Journey() {
  return (
    <section className={styles.journey}>
      <div className={styles.inner}>
        <h2 className={styles.title}>제가 걸어온 길을 기록합니다.</h2>
        <p className={styles.description}>
          경험과 배움이 어떻게 이어져 왔는지, 그 흐름을 따라가며 저만의 성장
          과정을 담았습니다.
        </p>
        <JourneyList />
      </div>
    </section>
  );
}
