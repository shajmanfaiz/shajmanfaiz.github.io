import React from 'react';
import { data } from '../../data';

function SectionLabel({ children }) {
  return <p className="label mb-3">{children}</p>;
}

export default function About({ locale }) {
  const t = data(locale);
  const isAr = locale === 'ar';
  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
      <div className="container-narrow">
        <div className="max-w-3xl mb-12" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
          <SectionLabel>{isAr ? 'عني' : 'About'}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--fg)' }}>{t.aboutTitle}</h2>
          <p className="text-[15px] leading-7" style={{ color: 'var(--fg-2)' }}>{t.summary}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Work Experience */}
          <div className="mono-card rounded-2xl p-6 md:p-7">
            <SectionLabel>{isAr ? 'الخبرة العملية' : 'Work Experience'}</SectionLabel>
            <div className="space-y-6">
              {t.workExperience.map((w, i) => (
                <div key={i} className="pb-6 last:pb-0 last:border-0 border-b" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex flex-wrap justify-between gap-2 mb-1">
                    <h3 className="text-[15px] font-semibold" style={{ color: 'var(--fg)' }}>{w.company}</h3>
                    <span className="text-xs px-2 py-1 rounded-full border" style={{ borderColor: 'var(--border)', color: 'var(--fg-3)' }}>
                      {w.startYear?.slice(0, 7)} — {w.endYear?.slice(0, 7)}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-1.5" style={{ color: 'var(--fg-2)' }}>{w.position}</p>
                  <p className="text-sm leading-6 mb-2" style={{ color: 'var(--fg-2)' }}>{w.description}</p>
                  <p className="text-[13px] leading-6" style={{ color: 'var(--fg-3)' }}>{w.keyAchievements}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certs */}
          <div className="space-y-6">
            <div className="mono-card rounded-2xl p-6 md:p-7">
              <SectionLabel>{isAr ? 'التعليم' : 'Education'}</SectionLabel>
              <div className="space-y-4">
                {t.education.map((e, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 bg-[var(--fg)] rounded-full self-stretch opacity-20" style={{ minHeight: 40 }} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>{e.school}</p>
                      <p className="text-sm" style={{ color: 'var(--fg-2)' }}>{e.degree}</p>
                      <p className="text-xs mt-1" style={{ color: 'var(--fg-3)' }}>{e.startYear?.slice(0, 4)} — {e.endYear?.slice(0, 4)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mono-card rounded-2xl p-6 md:p-7">
              <SectionLabel>{isAr ? 'الشهادات' : 'Certifications'}</SectionLabel>
              <ul className="space-y-2">
                {t.certifications.map((c, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--fg-2)' }}>
                    <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--fg)' }} /> {c}
                  </li>
                ))}
              </ul>
              <div className="hairline my-6" />
              <SectionLabel>{isAr ? 'الأدوات' : 'Tools'}</SectionLabel>
              <div className="flex flex-wrap gap-1.5">
                {t.tools.map((tool, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-full capitalize border" style={{ borderColor: 'var(--border)', color: 'var(--fg-2)', background: 'var(--bg-2)' }}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills - full */}
        <div className="mt-8 mono-card rounded-2xl p-6 md:p-7">
          <SectionLabel>{t.technicalSkillsTitle}</SectionLabel>
          <div className="grid md:grid-cols-3 gap-8">
            {t.skills.map((cat, idx) => (
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
      </div>
    </section>
  );
}
