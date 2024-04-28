import { NavLink } from 'react-router-dom';
import styles from './index.module.css';
import { HOME_ROUTE } from '@/utils/constants/routes';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__topRow}>
          <div className={styles.footer__topRowContent}>
            <div className={styles.footer__logo}>
              <div className={styles.footer__logoWrapper}>
                <span></span>
              </div>
              <h1 className={styles.footer__companyName}>DOMAIN</h1>
            </div>
            <nav className={styles.footer__menu}>
              <b>Menu</b>
              <ul>
                <li>
                  <NavLink to={HOME_ROUTE}>Home</NavLink>
                </li>
                <li>
                  <NavLink>About</NavLink>
                </li>
                <li>
                  <NavLink>Testimonials</NavLink>
                </li>
                <li>
                  <NavLink>Pricing Plans</NavLink>
                </li>
              </ul>
            </nav>
            <div className={styles.footer__companyInfo}>
              <b>Company Info</b>
              <p>Reg number 0000 Company Address 000 00000000000</p>
            </div>
            <div className={styles.footer__cardsTypeImg}>
              <span className={styles.visa}></span>
              <span className={styles.mastercard}></span>
              <span className={styles.maestro}></span>
            </div>
          </div>
        </div>
        <div className={styles.footer__middleRow}>
          <ul>
            <li className={styles.footer__joinCommunity}>
              Join our community of forward-thinkers and entrepreneurs dedicated
              to growth, resilience, and success.
            </li>
            <li className={styles.footer__email}>
              <a href="mailto:domain@example.com">
                <b>domain@example.com</b>
              </a>
            </li>
            <li>
              <a href="tel:000 - 000 - 000">
                <b>000 - 000 - 000</b>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__bottomRow}>
          <h6>© 2024 DOMAIN</h6>
        </div>
      </div>
    </footer>
  );
}
