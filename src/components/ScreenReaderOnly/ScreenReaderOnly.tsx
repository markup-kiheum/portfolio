import styles from './ScreenReaderOnly.module.css';

interface Props {
  srLabel: string;
}

export default function ScreenReaderOnly({ srLabel }: Props) {
  return <span className={styles.srOnly}>{srLabel}</span>;
}
