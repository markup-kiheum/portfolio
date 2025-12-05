'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cx from 'clsx';

import ScreenReaderOnly from '@/components/ScreenReaderOnly';
import { useTheme } from '@/context/ThemeContext';
import { ROUTES } from '@/lib/constants/routes';

import styles from './Header.module.css';

export default function Header() {
  const navItems = ROUTES;
  const pathname = usePathname();
  const { toggleTheme } = useTheme();
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
          <nav className={styles.nav} aria-label="Primary navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => {
                const isActive = !!pathname?.startsWith(item.path);

                return (
                  <li key={item.path} className={styles.navItem}>
                    <Link
                      href={item.path}
                      className={cx(styles.navLink, {
                        [styles.navLinkActive]: isActive,
                      })}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav className={styles.utilNav} aria-label="Utility navigation">
            <ul className={styles.utilList}>
              <li className={styles.utilItem}>
                <Link
                  href="https://github.com/markup-kiheum/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ScreenReaderOnly srLabel="github 링크" />
                  <span className={styles.githubIcon} />
                </Link>
              </li>
              <li className={styles.utilItem}>
                <Link href="mailto:markup-kiheum@gmail.com">
                  <ScreenReaderOnly srLabel="email 링크" />
                  <span className={styles.mailIcon} />
                </Link>
              </li>
              <li className={styles.utilItem}>
                <button
                  type="button"
                  className={styles.themeSwitch}
                  onClick={toggleTheme}
                  aria-label="테마 전환"
                >
                  <div className={styles.switchTrack}>
                    <ScreenReaderOnly srLabel="테마 전환 아이콘" />
                    <span className={styles.switchIcon} />
                  </div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
