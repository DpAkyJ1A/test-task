import styles from './index.module.css';
import {
  Header,
  SliderSection,
  StatsSection,
  AccordionImagesSection,
  VideoSection,
  AchievementsSection,
  ExpertSection,
  FaqSection,
  ReviewsSection,
  PricingPlansSection,
  Footer,
} from '@/layout';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Header />
      <main>
        <SliderSection />
        <StatsSection />
        <AccordionImagesSection />
        <VideoSection />
        <AchievementsSection />
        <ExpertSection />
        <FaqSection />
        <ReviewsSection />
        <PricingPlansSection />
      </main>
      <Footer />
    </div>
  );
}
