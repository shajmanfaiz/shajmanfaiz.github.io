import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import "../styles/globals.css";
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');
  const router = useRouter();
  const { locale } = router;

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  // Handle RTL for Arabic
  useEffect(() => {
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', locale || 'en');
  }, [locale]);

  return <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />;
}

export default appWithTranslation(MyApp);
