import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import "../styles/globals.css";
import StarField from '../components/core/StarField';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const router = useRouter();

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
    document.body.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
    document.body.setAttribute('data-theme', next);
  };

  useEffect(() => {
    const isArabic = router.pathname.startsWith('/ar');
    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', isArabic ? 'ar' : 'en');
  }, [router.pathname]);

  return (
    <>
      <StarField />
      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default MyApp;
