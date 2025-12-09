'use client';

import styles from './JourneyItem.module.css';

interface Props {
  title: string;
  duration: string;
  description: React.ReactNode;
}

export default function JourneyItem({ title, duration, description }: Props) {
  return (
    <li className={styles.journeyItem}>
      <div className={styles.itemTitleBox}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <span className={styles.itemDuration}>{duration}</span>
      </div>
      <div className={styles.itemDescription}>{description}</div>
    </li>
  );
}
