import { useState, useEffect, useCallback } from 'react';

function getInitialDarkMode() {
  if (typeof document === 'undefined') return false;
  const darkCookie = document.cookie
    .split(';')
    .find((c) => c.trim().startsWith('darkMode='));
  if (darkCookie) {
    return darkCookie.trim().split('=')[1] === '1';
  }
  return Boolean(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState(getInitialDarkMode);

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.cookie = `darkMode=${
      isDark ? '1' : '0'
    };path=/;max-age=31536000;SameSite=Lax`;
  }, [isDark]);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return [isDark, toggleDarkMode];
}
