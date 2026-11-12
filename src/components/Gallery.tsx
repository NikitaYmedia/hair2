import { useState } from 'react';
import type { Content } from '../content';
import { info } from '../content';

export default function Gallery({ t }: { t: Content['gallery'] }) {
  const [filter, setFilter] = useState('all');

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section__title">{t.title}</h2>
          <p className="section__text">{t.text}</p>
        </header>

        <div className="filters" role="group">
          {t.filters.map((f) => (
            <button
              key={f.key}
              type="button"
              className="filters__btn"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery__grid" data-filter={filter}>
          {t.items.map((item, i) => (
            <figure key={item.caption} className="tile" data-cat={item.cat}>
              <div className={`tile__img tile__img--${i + 1}`} role="img" aria-label={item.caption}>
                <span className="tile__tag">{item.tag}</span>
              </div>
              <figcaption className="tile__caption">
                {item.caption}
                <span className="icon icon--arrow-up-right" />
              </figcaption>
            </figure>
          ))}
        </div>

        <a className="insta" href={info.instagramUrl} target="_blank" rel="noreferrer">
          <span className="icon icon--camera" />
          <span className="insta__text">
            {t.instagram}
            <strong>{info.instagram}</strong>
          </span>
          <span className="icon icon--arrow-right" />
        </a>
      </div>
    </section>
  );
}
