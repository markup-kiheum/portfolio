'use client';

import { JOURNEY_ITEMS } from '@/lib/constants/journey';

import JourneyItem from '../JourneyItem';
import styles from './JourneyList.module.css';

export default function JourneyList() {
  return (
    <ol className={styles.journeyList}>
      {JOURNEY_ITEMS.map((item) => {
        return (
          <JourneyItem
            key={item.title}
            title={item.title}
            duration={item.duration}
            description={item.description}
          />
        );
      })}
    </ol>
  );
}
