import styles from './index.module.css';
import {
  Header,
  SliderSection,
  StatsSection,
  AccordionImagesSection,
  VideoSection,
} from '@/layout';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Header />
      <SliderSection />
      <StatsSection />
      <AccordionImagesSection />
      <VideoSection />
    </div>
  );
}
