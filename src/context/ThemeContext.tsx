'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getCurrentTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'light' ? 'light' : 'dark';
}

function setDocumentTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
}

function AppSkeleton() {
  return (
    <div>
      <header style={{ height: 64 }} />
      <main style={{ padding: '2rem 1.5rem' }}>
        <div style={{ height: 24, marginBottom: 16 }} />
        <div style={{ height: 180 }} />
      </main>
    </div>
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  const toggleTheme = () => {
    const current = getCurrentTheme();
    const next: Theme = current === 'dark' ? 'light' : 'dark';

    setDocumentTheme(next);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', next);
    }
  };

  const value: ThemeContextValue = { toggleTheme };

  if (!mounted) {
    return <AppSkeleton />;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}
