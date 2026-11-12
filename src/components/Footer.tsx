import type { Content } from '../content';
import { info } from '../content';

type Props = {
  t: Content['footer'];
  hours: Content['contact']['hours'];
};

export default function Footer({ t, hours }: Props) {
  return (
    <footer className="footer">
      <div className="footer__grid container">
        <div className="footer__brand">
          <a className="logo" href="#top" aria-label="Klip & Ro" />
          <p>{t.tagline}</p>
          <span className="badge">
            <span className="icon icon--leaf" />
            {t.badge}
          </span>
        </div>

        <div className="footer__col">
          <h3>{t.visitTitle}</h3>
          <p>{info.address}</p>
          <p>{info.city}</p>
        </div>

        <div className="footer__col">
          <h3>{t.hoursTitle}</h3>
          {hours.map((row) => (
            <p key={row.day} className="footer__row">
              <span>{row.day}</span>
              <span>{row.time}</span>
            </p>
          ))}
        </div>

        <div className="footer__col">
          <h3>{t.contactTitle}</h3>
          <p>
            <a href={`tel:${info.phoneRaw}`}>{info.phone}</a>
          </p>
          <p>
            <a href={`mailto:${info.email}`}>{info.email}</a>
          </p>
          <p>
            <a className="footer__insta" href={info.instagramUrl} target="_blank" rel="noreferrer">
              <span className="icon icon--camera" />
              {info.instagram}
            </a>
          </p>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>
          © {new Date().getFullYear()} Klip &amp; Ro Studio ApS. CVR: {info.cvr}. {t.rights}
        </p>
        <nav>
          <a href="#top">{t.privacy}</a>
          <a href="#top">{t.terms}</a>
        </nav>
      </div>
    </footer>
  );
}
