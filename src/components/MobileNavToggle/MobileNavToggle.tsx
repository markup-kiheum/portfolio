'use client';

import cx from 'clsx';

import styles from './MobileNavToggle.module.css';

interface Props {
  isNavOpen: boolean;
  onToggleNav: () => void;
}

export default function MobileNavToggle({ isNavOpen, onToggleNav }: Props) {
  return (
    <button
      type="button"
      className={styles.menuToggleButton}
      onClick={onToggleNav}
      aria-label={isNavOpen ? '메뉴 닫기' : '메뉴 열기'}
      aria-expanded={isNavOpen}
      aria-controls="mobile-nav"
    >
      <span className={cx(styles.menuBar, isNavOpen && styles.menuBarActive)} />
      <span className={cx(styles.menuBar, isNavOpen && styles.menuBarActive)} />
      <span className={cx(styles.menuBar, isNavOpen && styles.menuBarActive)} />
    </button>
  );
}
