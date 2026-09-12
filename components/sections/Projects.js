import React, { useMemo } from 'react';
import { data } from '../../data';

function dedupProjects(projects) {
  const seen = new Set();
  const out = [];
  for (const p of projects) {
    const key = p.title.trim().toLowerCase();
    if (!seen.has(key)) { seen.add(key); out.push(p); }
  }
  return out;
}

export default function Projects({ locale }) {
  const t = data(locale);
  const projects = useMemo(() => dedupProjects(t.projects || []), [t.projects]);
  const isAr = locale === 'ar';

  return (
    <section id="projects" className="section-pad" style={{ background: 'var(--bg-2)' }}>
      <div className="container-narrow">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
          <div>
            <p className="label mb-2">{isAr ? 'أعمالي' : 'Selected Work'}</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: 'var(--fg)' }}>{t.projectsTitle}</h2>
            <p className="text-sm mt-2" style={{ color: 'var(--fg-2)' }}>{t.projectsSubtitle}</p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: 'var(--border)', color: 'var(--fg-3)' }}>
            {projects.length} {isAr ? 'مشاريع' : 'projects'}
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <article key={i} className="mono-card rounded-2xl overflow-hidden flex flex-col group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--bg-3)] border-b" style={{ borderColor: 'var(--border)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.imgSrc?.startsWith('assets/') ? `/${p.imgSrc}` : p.imgSrc}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-[15px] font-semibold leading-tight" style={{ color: 'var(--fg)' }}>{p.title}</h3>
                <p className="text-[13px] leading-6 line-clamp-3" style={{ color: 'var(--fg-2)' }}>{p.description}</p>
                <div className="flex gap-2 mt-auto pt-2">
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full border hover:opacity-80 transition-opacity"
                    style={{ borderColor: 'var(--fg)', background: 'var(--fg)', color: 'var(--bg)' }}>
                    {isAr ? 'عرض' : 'View'} <span>↗</span>
                  </a>
                  {p.hostedUrl && p.hostedUrl !== p.link && (
                    <a href={p.hostedUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full border"
                      style={{ borderColor: 'var(--border)', color: 'var(--fg-2)', background: 'transparent' }}>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
