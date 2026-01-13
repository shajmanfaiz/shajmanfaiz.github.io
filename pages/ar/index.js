import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Projects from "../../components/sections/Projects";
import Contact from "../../components/sections/Contact";
import Header from "../../components/core/Header";
import Head from 'next/head';
import { data } from '../../data';

export default function Home({ theme, toggleTheme }) {
  const locale = 'ar';
  const translatedData = data(locale);

  return (
    <>
      <Head>
        <title>{translatedData.name} | Portfolio</title>
        <meta name="description" content={translatedData.summary} />
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

      {/* Footer */}
      <footer
        className="py-8 text-center text-sm"
        style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-muted)',
          borderTop: '1px solid var(--border)'
        }}
      >
        © {new Date().getFullYear()} {translatedData.name}. All rights reserved.
      </footer>
    </>
  );
}
