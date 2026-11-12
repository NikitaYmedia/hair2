import type { Content, Lang } from '../content';
import { info } from '../content';

type Props = {
  t: Content['header'];
  lang: Lang;
  onLangChange: (lang: Lang) => void;
};

export default function Header({ t, lang, onLangChange }: Props) {
  return (
    <header className="header">
      <div className="header__inner container">
        <a className="logo" href="#top" aria-label="Klip & Ro" />

        <nav className="header__nav" aria-label={t.navLabel}>
          {t.nav.map((item) => (
            <a key={item.label} href={`#${item.to}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="lang" role="group" aria-label={t.langLabel}>
            <button type="button" aria-pressed={lang === 'da'} onClick={() => onLangChange('da')}>
              DA
            </button>
            <span className="lang__sep">/</span>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => onLangChange('en')}>
              EN
            </button>
          </div>

          <a className="icon-btn" href="#contact" aria-label={t.location}>
            <span className="icon icon--pin" />
          </a>
          <a className="icon-btn" href={`tel:${info.phoneRaw}`} aria-label={t.call}>
            <span className="icon icon--phone" />
          </a>
          <a className="btn btn--dark btn--small" href="#contact">
            {t.book}
            <span className="icon icon--calendar" />
          </a>
          <a className="icon-btn icon-btn--dark" href="#contact" aria-label={t.account}>
            <span className="icon icon--user" />
          </a>
        </div>
      </div>
    </header>
  );
}
