import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { data } from '../../data';

const Header = ({ theme, toggleTheme, locale }) => {
  const router = useRouter();
  const t = data(locale);
  const isArabic = locale === 'ar';
  const isDark = theme === 'dark';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const switchLocale = (newLocale) => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (newLocale === 'ar') router.push('/ar' + hash);
    else router.push('/' + hash);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg) 82%, transparent)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container-narrow flex items-center justify-between h-[56px]">
        <Link href={isArabic ? '/ar' : '/'}>
          <a className="flex items-center gap-3 no-underline">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold tracking-widest"
              style={{ background: 'var(--fg)', color: 'var(--bg)' }}
            >
              SF
            </span>
            <span className="hidden sm:block text-sm font-semibold tracking-tight" style={{ color: 'var(--fg)' }}>
              {t.name}
            </span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { id: 'hero', label: t.navLinks[0]?.title || 'Home' },
            { id: 'about', label: t.navLinks[1]?.title || 'About' },
            { id: 'projects', label: t.navLinks[2]?.title || 'Projects' },
            { id: 'contact', label: t.navLinks[3]?.title || 'Contact' },
          ].map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="text-[13px] font-medium bg-transparent border-0 cursor-pointer hover:opacity-60 transition-opacity"
              style={{ color: 'var(--fg-2)' }}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Lang */}
          <div className="flex rounded-full p-0.5" style={{ border: '1px solid var(--border)', background: 'var(--bg-2)' }}>
            {['en', 'ar'].map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className="px-3 py-1 rounded-full text-[11px] font-bold tracking-widest border-0 cursor-pointer transition-colors"
                style={{
                  background: (l === 'ar') === isArabic ? 'var(--fg)' : 'transparent',
                  color: (l === 'ar') === isArabic ? 'var(--bg)' : 'var(--fg-2)',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="w-9 h-9 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
            style={{ background: 'var(--bg-2)', borderColor: 'var(--border)', color: 'var(--fg)' }}
          >
            {isDark ? (
              // sun
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              // moon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
