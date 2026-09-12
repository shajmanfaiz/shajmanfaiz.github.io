import React from 'react';
import { data } from '../../data';

export default function Contact({ locale }) {
  const t = data(locale);
  const isAr = locale === 'ar';
  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container-narrow">
        <div className="mono-card rounded-[24px] p-8 md:p-12 text-center" style={{ background: 'var(--fg)', color: 'var(--bg)', borderColor: 'var(--fg)' }}>
          <p className="text-[11px] tracking-[0.2em] font-bold uppercase opacity-60 mb-3">{isAr ? 'تواصل' : 'Contact'}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: 'var(--bg)' }}>{t.contactTitle}</h2>
          <p className="max-w-xl mx-auto text-sm leading-6 opacity-70 mb-8">{t.contactDescription}</p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href={`mailto:${t.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
              {t.sayHelloButton} — {t.email} <span>→</span>
            </a>
            <a href={`tel:${t.contactInformation?.replace(/\s/g,'')}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border"
              style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--bg)' }}>
              <i className="fas fa-phone text-xs" /> {t.contactInformation}
            </a>
          </div>

          <div className="flex justify-center gap-3">
            {t.socialMedia.map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.socialMedia}
                className="w-10 h-10 rounded-full flex items-center justify-center border hover:opacity-80 transition-opacity"
                style={{ borderColor: 'rgba(255,255,255,0.18)', color: 'var(--bg)' }}>
                <i className={`${s.icon} text-sm`} />
              </a>
            ))}
          </div>

          <p className="text-xs mt-8 opacity-50">{t.address} · {t.email}</p>
        </div>
      </div>
    </section>
  );
}
