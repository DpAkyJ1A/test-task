import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { HOME_ROUTE } from '@/utils/constants/routes';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to={HOME_ROUTE}>
        <h1>Test Task</h1>
      </Link>
    </header>
  );
}
