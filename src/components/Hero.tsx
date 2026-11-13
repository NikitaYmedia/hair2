import type { Content } from '../content';

export default function Hero({ t }: { t: Content['hero'] }) {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <h1 className="hero__title">{t.title}</h1>
        <p className="hero__text">{t.text}</p>

        <div className="hero__actions">
          <a className="btn btn--glass" href="#services">
            {t.secondary}
            <span className="icon icon--arrow-right" />
          </a>
        </div>

        <div className="rating">
          <span className="stars" role="img" aria-label="5 / 5" />
          <strong className="rating__score">{t.score}</strong>
          <span className="rating__reviews">{t.reviews}</span>
        </div>
      </div>
    </section>
  );
}
