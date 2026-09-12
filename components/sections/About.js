import React from 'react';
import { data } from '../../data';

function SectionLabel({ children }) {
  return <p className="label mb-3">{children}</p>;
}

export default function About({ locale }) {
  const t = data(locale);
  const isAr = locale === 'ar';
  // filter out sensitive Iqama category
  const visibleSkills = (t.skills || []).filter((c) => !/iqama|الإقامة/i.test(c.title));

  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
      <div className="container-narrow">
        <div className="max-w-3xl mb-10" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
          <SectionLabel>{isAr ? 'عني' : 'About'}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--fg)' }}>{t.aboutTitle}</h2>
          <p className="text-[15px] leading-7" style={{ color: 'var(--fg-2)' }}>{t.summary}</p>
          <blockquote className="text-sm italic border-l-2 pl-3 py-1 mt-6" style={{ borderColor: 'var(--fg)', color: 'var(--fg-2)' }}>
            “{t.quote}”
          </blockquote>
        </div>

        <div className="grid md:grid-cols-[1.4fr_0.8fr] gap-6">
          <div className="mono-card rounded-2xl p-6 md:p-7">
            <SectionLabel>{t.technicalSkillsTitle}</SectionLabel>
            <div className="space-y-6">
              {visibleSkills.map((cat, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--fg)' }}>{cat.title}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-full border" style={{ borderColor: 'var(--border)', color: 'var(--fg-2)', background: 'var(--bg-2)' }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mono-card rounded-2xl p-6 md:p-7">
            <SectionLabel>{t.toolsTitle}</SectionLabel>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {t.tools.map((tool, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-full capitalize border" style={{ borderColor: 'var(--border)', color: 'var(--fg-2)', background: 'var(--bg-2)' }}>{tool}</span>
              ))}
            </div>
            <div className="hairline my-6" />
            <SectionLabel>{isAr ? 'اللغات' : 'Languages'}</SectionLabel>
            <div className="flex flex-wrap gap-1.5">
              {t.languages.map((l, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-full border" style={{ borderColor: 'var(--border)', color: 'var(--fg-2)', background: 'var(--bg)' }}>{l}</span>
              ))}
            </div>
            <p className="text-xs leading-5 mt-6" style={{ color: 'var(--fg-3)' }}>
              {isAr ? 'الخبرة والتعليم والشهادات متوفرة في السيرة الذاتية.' : 'Work, education & certifications are in the resume.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
