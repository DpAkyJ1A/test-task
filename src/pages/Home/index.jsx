import styles from './index.module.css';
import { Header } from '@/layout';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Header />
      <main>
        <h1 className={styles.h1}>Test Task</h1>
      </main>
    </div>
  );
}
