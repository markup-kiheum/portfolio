'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cx from 'clsx';

import HeaderNav from '@/components/HeaderNav';
import HeaderUtilNav from '@/components/HeaderUtilNav';
import MobileNav from '@/components/MobileNav';
import MobileNavToggle from '@/components/MobileNavToggle';
import ScreenReaderOnly from '@/components/ScreenReaderOnly';
import { navState } from '@/types/navState';

import styles from './Header.module.css';

export default function Header() {
  const scrollTriggerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [navState, setNavState] = useState<navState>({
    isOpen: false,
    basePath: pathname,
  });

  const isMenuOpen = navState.isOpen && navState.basePath === pathname;

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

  const handleToggleMenu = () => {
    setNavState((prev) => {
      const samePath = prev.basePath === pathname;

      if (!samePath) {
        return {
          isOpen: true,
          basePath: pathname,
        };
      }

      return {
        isOpen: !prev.isOpen,
        basePath: prev.basePath,
      };
    });
  };

  return (
    <>
      <div ref={scrollTriggerRef} className={styles.scrollTrigger} />
      <header className={cx(styles.header, isSticky && styles.headerSticky)}>
        <div className={styles.inner}>
          <h1 className={styles.logo}>
            <ScreenReaderOnly srLabel="Markup Kiheum Portfolio Logo" />
            <Link href="/" className={styles.homeLink} />
          </h1>
          <div className={styles.desktopNav}>
            <HeaderNav />
            <HeaderUtilNav />
          </div>
          <div className={styles.mobileNav}>
            <MobileNavToggle
              isNavOpen={isMenuOpen}
              onToggleNav={handleToggleMenu}
            />
            <MobileNav isNavOpen={isMenuOpen} />
          </div>
        </div>
      </header>
    </>
  );
}
