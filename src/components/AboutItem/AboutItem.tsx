import styles from './AboutItem.module.css';

interface Props {
  question: string;
  answer: React.ReactNode;
}

export default function AboutItem({ question, answer }: Props) {
  return (
    <li key={question}>
      <p className={styles.question}>{question}</p>
      <p className={styles.answer}>{answer}</p>
    </li>
  );
}
