'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cx from 'clsx';

import { HOME_ROUTE, ROUTES } from '@/lib/constants/routes';

import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { path: HOME_ROUTE.path, label: HOME_ROUTE.label },
    ...ROUTES.map((page) => ({
      path: page.path,
      label: page.label,
    })),
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Link href="/" className={styles.homeLink}>
            Markup Kiheum Portfolio Logo
          </Link>
        </h1>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(item.path);

              return (
                <li key={item.path} className={styles.navItem}>
                  <Link
                    href={item.path}
                    className={cx(styles.navLink, {
                      [styles.navLinkActive]: isActive,
                    })}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
