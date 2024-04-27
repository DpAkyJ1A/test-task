import AccordionImagesSection from '@/layout/AccordionImagesSection';
import styles from './index.module.css';
import { Header, SliderSection, StatsSection } from '@/layout';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Header />
      <SliderSection />
      <StatsSection />
      <AccordionImagesSection />
    </div>
  );
}
