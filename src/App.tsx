import { useEffect, useState } from 'react';
import { content, type Lang } from './content';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Lang>('da');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = content[lang];

  return (
    <>
      <Header t={t.header} lang={lang} onLangChange={setLang} />
      <main id="top">
        <Hero t={t.hero} />
        <About t={t.about} />
        <Services t={t.services} />
        <Gallery t={t.gallery} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} hours={t.contact.hours} />
    </>
  );
}
