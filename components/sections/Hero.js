import React from 'react';
import { data } from '../../data';

export default function Hero({ locale }) {
  const t = data(locale);
  const isAr = locale === 'ar';
  return (
    <section id="hero" className="pt-[56px]">
      <div className="container-narrow">
        <div
          className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-8 items-center py-16 md:py-24 border-b"
          style={{ borderColor: 'var(--border)' }}
        >
          <div style={{ direction: isAr ? 'rtl' : 'ltr' }}>
            <p className="label mb-4">{t.greeting} — {isAr ? 'مرحبا' : 'Available for work'}</p>
            <h1 className="text-[2.6rem] md:text-[3.4rem] font-bold tracking-[-0.04em] leading-[0.95] mb-4" style={{ color: 'var(--fg)' }}>
              {t.name}
              <span className="block text-[1.1rem] md:text-[1.25rem] font-medium tracking-tight mt-3" style={{ color: 'var(--fg-2)' }}>
                {t.position}
              </span>
            </h1>
            <p className="max-w-[52ch] text-[15px] leading-7 mb-8" style={{ color: 'var(--fg-2)' }}>
              {t.summary}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href={`mailto:${t.email}`} className="btn-invert">
                {t.contactButtonText} <span aria-hidden>→</span>
              </a>
              <a href={t.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                {t.resumeButtonText}
              </a>
            </div>
            <div className="flex items-center gap-4 text-[13px]" style={{ color: 'var(--fg-2)' }}>
              <span className="inline-flex items-center gap-2"><i className="fas fa-envelope text-xs" /> {t.email}</span>
              <span className="hidden sm:inline-flex items-center gap-2"><i className="fas fa-map-marker-alt text-xs" /> {t.address}</span>
            </div>
            <div className="flex gap-3 mt-6">
              {t.socialMedia.map((s, i) => (
                <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.socialMedia}
                  className="w-9 h-9 rounded-full flex items-center justify-center border hover:opacity-70 transition-opacity"
                  style={{ borderColor: 'var(--border)', color: 'var(--fg)', background: 'var(--bg)' }}>
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: monochrome stats / info card */}
          <div className="mono-card rounded-2xl p-6 md:p-7" style={{ background: 'var(--bg-2)' }}>
            <p className="label mb-4">{isAr ? 'نظرة سريعة' : 'At a glance'}</p>
            <div className="space-y-5">
              <div className="flex justify-between gap-4 pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
                <span className="text-sm" style={{ color: 'var(--fg-2)' }}>{isAr ? 'الموقع' : 'Location'}</span>
                <span className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>{t.address}</span>
              </div>
              <div className="flex justify-between gap-4 pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
                <span className="text-sm" style={{ color: 'var(--fg-2)' }}>{isAr ? 'الإقامة' : 'Iqama'}</span>
                <span className="text-xs font-bold tracking-widest px-2.5 py-1 rounded-full" style={{ background: 'var(--fg)', color: 'var(--bg)' }}>
                  {t.skills.find(s => s.title.toLowerCase().includes('iqama') || s.title.includes('الإقامة'))?.skills[0] || 'Transferable'}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--fg)' }}>{isAr ? 'اللغات' : 'Languages'}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.languages.map((l, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full border" style={{ borderColor: 'var(--border)', color: 'var(--fg-2)', background: 'var(--bg)' }}>{l}</span>
                  ))}
                </div>
              </div>
              <blockquote className="text-sm italic border-l-2 pl-3 py-1" style={{ borderColor: 'var(--fg)', color: 'var(--fg-2)' }}>
                “{t.quote}”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
