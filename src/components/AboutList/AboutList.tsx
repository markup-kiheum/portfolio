'use client';

import { ABOUT_ITEMS } from '@/lib/constants/about';

import AboutItem from '../AboutItem';
import styles from './AboutList.module.css';

export default function AboutList() {
  return (
    <ul className={styles.questionList}>
      {ABOUT_ITEMS.map((item) => {
        return (
          <AboutItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        );
      })}
    </ul>
  );
}
