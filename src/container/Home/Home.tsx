import { ABOUT_ITEMS } from '@/lib/constants/about';

import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          안녕하세요. Front UI 개발자 황기흠입니다.
        </h2>
        <p className={styles.description}>
          제 소개를 조금 색다른 방식으로 보여주고 싶어 저에게 질문하고 스스로
          답하는 형식으로 풀어보았습니다.
        </p>
        <ul className={styles.questionList}>
          {ABOUT_ITEMS.map((item) => {
            return (
              <li key={item.question}>
                <p className={styles.question}>{item.question}</p>
                <p className={styles.answer}>{item.answer}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
