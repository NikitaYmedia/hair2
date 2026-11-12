import type { Content } from '../content';

export default function About({ t }: { t: Content['about'] }) {
  return (
    <section className="about section" id="about">
      <div className="about__grid container">
        <figure className="about__figure">
          <div className="about__photo" role="img" aria-label={t.badge} />
          <figcaption className="about__badge">
            <span className="icon icon--leaf" />
            {t.badge}
          </figcaption>
        </figure>

        <div className="about__body">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="about__title">{t.title}</h2>
          {t.paragraphs.map((p) => (
            <p key={p} className="about__text">
              {p}
            </p>
          ))}

          <ul className="features">
            {t.features.map((f) => (
              <li key={f.title} className="features__item">
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>

          <div className="about__footer">
            <div className="person">
              <span className="person__avatar">{t.person.initial}</span>
              <div className="person__text">
                <strong>{t.person.name}</strong>
                <span>{t.person.role}</span>
              </div>
            </div>
            <a className="text-link" href="#about">
              {t.link}
              <span className="icon icon--arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
