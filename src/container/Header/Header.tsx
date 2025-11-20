'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HOME_ROUTE, ROUTES } from '@/lib/constants/routes';

import clsx from 'clsx';

import styles from './Header.module.scss';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: HOME_ROUTE.path, label: HOME_ROUTE.label },
    ...ROUTES.map((page) => ({
      path: page.path,
      label: page.label,
    })),
  ];

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Link href="/" className={styles.homeLink} onClick={handleCloseMenu}>
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
                    className={clsx(styles.navLink, {
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
        {isOpen && (
          <button className={styles.mobileMenuButton}>모바일 버튼</button>
        )}
      </div>
    </header>
  );
}
