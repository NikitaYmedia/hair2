import type { Content } from '../content';
import { info } from '../content';

export default function Contact({ t }: { t: Content['contact'] }) {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section__title">{t.title}</h2>
          <p className="section__text">{t.text}</p>
        </header>

        <div className="contact__grid">
          <article className="card card--address">
            <span className="card__icon icon icon--pin" />
            <p className="card__label">{t.addressLabel}</p>
            <strong className="card__value">{info.address}</strong>
            <span className="card__sub">{info.city}</span>
            <p className="card__note">{t.addressNote}</p>
          </article>

          <article className="card card--hours">
            <span className="card__icon icon icon--clock" />
            <p className="card__label">{t.hoursLabel}</p>
            <dl className="hours">
              {t.hours.map((row) => (
                <div key={row.day} className="hours__row">
                  <dt>{row.day}</dt>
                  <dd>{row.time}</dd>
                </div>
              ))}
            </dl>
            <p className="card__note">{t.hoursNote}</p>
          </article>

          <article className="card card--map">
            <div className="map" role="img" aria-label={t.map.pin}>
              <span className="map__park">{t.map.park}</span>
              <span className="map__street">{t.map.street}</span>
              <span className="map__pin">
                <strong>{t.map.pin}</strong>
                <small>{info.address}</small>
              </span>
              <span className="map__stop">{t.map.stop}</span>
            </div>
            <div className="map__info">
              <div className="map__row">
                <strong>{t.map.routeTitle}</strong>
                <span>{t.map.zone}</span>
              </div>
              <p>{t.map.text}</p>
              <div className="map__buttons">
                <a className="btn btn--outline btn--small" href={info.mapsUrl} target="_blank" rel="noreferrer">
                  <span className="icon icon--map" />
                  {t.map.google}
                </a>
                <a className="btn btn--outline btn--small" href={info.transitUrl} target="_blank" rel="noreferrer">
                  <span className="icon icon--navigation" />
                  {t.map.transit}
                </a>
              </div>
            </div>
          </article>

          <article className="card card--contact">
            <div className="contact__row">
              <div className="contact__item">
                <span className="icon icon--phone" />
                <div>
                  <p className="card__label">{t.directLabel}</p>
                  <a href={`tel:${info.phoneRaw}`}>{info.phone}</a>
                </div>
              </div>
              <div className="contact__item">
                <span className="icon icon--mail" />
                <div>
                  <p className="card__label">{t.writeLabel}</p>
                  <a href={`mailto:${info.email}`}>{info.email}</a>
                </div>
              </div>
            </div>

            <p className="card__label card__label--caps">{t.transportTitle}</p>
            <ul className="transport">
              {t.transport.map((item) => (
                <li key={item.title} className="transport__item">
                  <span className={`icon icon--${item.icon}`} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
