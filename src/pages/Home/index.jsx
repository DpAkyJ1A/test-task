import styles from './index.module.css';
import { Header, SliderSection } from '@/layout';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Header />
      <SliderSection />
    </div>
  );
}
