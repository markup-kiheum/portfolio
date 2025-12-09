'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cx from 'clsx';

import { ROUTES } from '@/lib/constants/routes';

import styles from './HeaderNav.module.css';

export default function HeaderNav() {
  const navItems = ROUTES;
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <ul className={styles.navList}>
        {navItems.map((item) => {
          const isHome = item.path === '/';
          const isActive = isHome
            ? pathname === '/'
            : pathname.startsWith(item.path);

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
  );
}
