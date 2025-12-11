'use client';

import cx from 'clsx';

import HeaderNav from '@/components/HeaderNav';
import HeaderUtilNav from '@/components/HeaderUtilNav';

import styles from './MobileNav.module.css';

interface Props {
  isNavOpen: boolean;
}

export default function MobileNav({ isNavOpen }: Props) {
  return (
    <div
      className={cx(styles.mobileNavWrapper, isNavOpen && styles.mobileNavOpen)}
    >
      <div className={styles.mobileNavInner}>
        <HeaderNav />
        <HeaderUtilNav />
      </div>
    </div>
  );
}
