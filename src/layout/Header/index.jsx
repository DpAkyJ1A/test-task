import { Link, NavLink } from 'react-router-dom';
import styles from './index.module.css';
import { HOME_ROUTE } from '@/utils/constants/routes';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__topRow}>
          <a href="mailto:SUPPORT@DOMAIN.COM">SUPPORT@DOMAIN.COM</a>
          <a href="tel:+00000000000">+000 000 000 00</a>
          <span>Support 24/7</span>
          <span>CITY NAME, ADDRESS</span>
        </div>
        <div className={styles.header__row}>
          <Link to={HOME_ROUTE}>
            <div className={styles.header__logo}></div>
          </Link>
          <div className={styles.header__nav}>
            <ul>
              <li>
                <NavLink>Home</NavLink>
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
              <li>
                <NavLink>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
