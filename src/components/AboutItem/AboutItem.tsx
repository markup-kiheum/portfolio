'use client';

import styles from './AboutItem.module.css';

interface Props {
  question: string;
  answer: React.ReactNode;
}

export default function AboutItem({ question, answer }: Props) {
  return (
    <li key={question}>
      <p className={styles.question}>{question}</p>
      <div className={styles.answer}>{answer}</div>
    </li>
  );
}
