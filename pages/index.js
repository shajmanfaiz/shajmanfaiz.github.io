import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Header from "../components/core/Header";
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { data } from '../data';

export default function Home({ theme, toggleTheme }) {
  const translatedData = data();

  return (
    <>
      <Head>
        <title>{translatedData.name} | Portfolio</title>
        <meta name="description" content={translatedData.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>

      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
