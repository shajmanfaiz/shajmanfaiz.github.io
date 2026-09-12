import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Projects from "../../components/sections/Projects";
import Contact from "../../components/sections/Contact";
import Header from "../../components/core/Header";
import Head from 'next/head';
import { data } from '../../data';

export default function Home({ theme, toggleTheme }) {
  const locale = 'ar';
  const t = data(locale);
  return (
    <>
      <Head>
        <title>{t.name} | Portfolio</title>
        <meta name="description" content={t.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header theme={theme} toggleTheme={toggleTheme} locale={locale} />
      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <Projects locale={locale} />
        <Contact locale={locale} />
      </main>
      <footer className="py-8 text-center text-xs border-t" style={{ borderColor: 'var(--border)', color: 'var(--fg-3)', background: 'var(--bg)' }}>
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {t.name}. جميع الحقوق محفوظة.</span>
          <span className="inline-flex gap-3">
            {t.socialMedia.map((s,i)=><a key={i} href={s.link} target="_blank" rel="noopener noreferrer" style={{color:'var(--fg-3)'}}><i className={`${s.icon}`} /></a>)}
          </span>
        </div>
      </footer>
    </>
  );
}
