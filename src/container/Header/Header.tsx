'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import cx from 'clsx';

import HeaderNav from '@/components/HeaderNav';
import HeaderUtilNav from '@/components/HeaderUtilNav';
import ScreenReaderOnly from '@/components/ScreenReaderOnly';

import styles from './Header.module.css';

export default function Header() {
  const scrollTriggerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    if (scrollTriggerRef.current) observer.observe(scrollTriggerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={scrollTriggerRef} className={styles.scrollTrigger} />
      <header className={cx(styles.header, isSticky && styles.headerSticky)}>
        <div className={styles.inner}>
          <h1 className={styles.logo}>
            <ScreenReaderOnly srLabel="Markup Kiheum Portfolio Logo" />
            <Link href="/" className={styles.homeLink} />
          </h1>
          <HeaderNav />
          <HeaderUtilNav />
        </div>
      </header>
    </>
  );
}
