'use client';

import Link from 'next/link';

import ScreenReaderOnly from '@/components/ScreenReaderOnly';
import { useTheme } from '@/context/ThemeContext';
import { UTIL_ITEM } from '@/lib/constants/headerUtil';

import styles from './HeaderUtilNav.module.css';

export default function HeaderUtilNav() {
  const { toggleTheme } = useTheme();

  return (
    <nav className={styles.utilNav} aria-label="Utility navigation">
      <ul className={styles.utilList}>
        {UTIL_ITEM.map((item) => {
          return (
            <li key={item.srLabel} className={styles.utilItem}>
              <Link
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                <ScreenReaderOnly srLabel={item.srLabel} />
                <span className={styles[item.iconKey]} />
              </Link>
            </li>
          );
        })}
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
  );
}
