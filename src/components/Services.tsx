import type { Content } from '../content';

export default function Services({ t }: { t: Content['services'] }) {
  return (
    <section className="services section" id="services">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section__title">{t.title}</h2>
          <p className="section__text">{t.text}</p>
        </header>

        <div className="services__grid">
          {t.groups.map((group) => (
            <article key={group.title} className="price-card">
              <header className="price-card__head">
                <span className={`icon icon--${group.icon}`} />
                <h3 className="price-card__title">{group.title}</h3>
                <span className="pill">{group.count}</span>
              </header>

              <ul className="price-card__list">
                {group.items.map((item) => (
                  <li key={item.name} className="price-item">
                    <div className="price-item__row">
                      <h4 className="price-item__name">{item.name}</h4>
                      <span className="pill pill--small">{item.duration}</span>
                      <span className="price-item__price">{item.price}</span>
                    </div>
                    <p className="price-item__desc">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="note">
          <span className="icon icon--info" />
          <div className="note__text">
            <strong>{t.noteTitle}</strong>
            <span>{t.noteText}</span>
          </div>
          <a className="btn btn--dark" href="#contact">
            {t.noteButton}
            <span className="icon icon--calendar" />
          </a>
        </aside>
      </div>
    </section>
  );
}
