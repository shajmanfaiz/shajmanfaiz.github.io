import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { data } from '../../data';

const Header = ({ theme, toggleTheme, locale }) => {
    const router = useRouter();
    const translatedData = data(locale);
    const isArabic = locale === 'ar';

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const switchLocale = (newLocale) => {
        const hash = window.location.hash;
        if (newLocale === 'ar') {
            router.push('/ar' + hash);
        } else {
            router.push('/' + hash);
        }
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
            style={{
                backgroundColor: 'var(--bg-primary)',
                borderBottom: '1px solid var(--border)'
            }}
        >
            <div className="container flex items-center justify-between h-16">
                {/* Logo/Name */}
                <Link href={isArabic ? "/ar" : "/"}>
                    <a
                        className="text-xl font-bold transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {translatedData.name}
                    </a>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {['hero', 'about', 'projects', 'contact'].map((section, i) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className="text-sm font-medium transition-colors cursor-pointer bg-transparent border-none"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            {translatedData.navLinks[i]?.title || section}
                        </button>
                    ))}
                </nav>

                {/* Controls */}
                <div className="flex items-center gap-4">
                    {/* Language Toggle */}
                    <div
                        className="flex rounded-full overflow-hidden"
                        style={{ border: '1px solid var(--border)' }}
                    >
                        <button
                            onClick={() => switchLocale('en')}
                            className={`px-3 py-1.5 text-xs font-semibold transition-colors border-none cursor-pointer ${!isArabic ? 'bg-[var(--accent)] text-white' : ''
                                }`}
                            style={{
                                backgroundColor: !isArabic ? 'var(--accent)' : 'transparent',
                                color: !isArabic ? 'white' : 'var(--text-secondary)'
                            }}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => switchLocale('ar')}
                            className={`px-3 py-1.5 text-xs font-semibold transition-colors border-none cursor-pointer ${isArabic ? 'bg-[var(--accent)] text-white' : ''
                                }`}
                            style={{
                                backgroundColor: isArabic ? 'var(--accent)' : 'transparent',
                                color: isArabic ? 'white' : 'var(--text-secondary)'
                            }}
                        >
                            AR
                        </button>
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors border-none cursor-pointer"
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)'
                        }}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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