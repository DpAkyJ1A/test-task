import styles from './index.module.css';
import { useState, useEffect } from 'react';
import { SliderNavigation } from '@/components';

const slides = [
  {
    text: "Being in the tech industry, staying ahead is crucial. Business Mastery Hub has been a game-changer for me. The webinars on technology trends were spot-on, and the skill testing allowed me to identify areas for improvement. The real-time collaboration tools have streamlined my team's efficiency, and the strategies discussed have significantly impacted our approach. {COMPANY} is a must for any tech entrepreneur navigating the fast-paced digital landscape.",
    author: 'lorem ipsum',
    occupation: 'lorem ipsum',
  },
  {
    text: "I can't thank the team at {COMPANY} enough for their invaluable guidance. The expert appointments provided me with tailored strategies that transformed my small business. The e-books on leadership and communication were eye-opening, and the personalized skill development plans elevated both my team and me. {COMPANY} has become my go-to resource for business growth, and I couldn't be happier with the results.",
    author: 'Sarah T.',
    occupation: 'Small Business Owner',
  },
  {
    text: "I've always been passionate about finance, and Business Mastery Hub took my understanding to a whole new level. The e-books on financial strategies provided practical insights that I could immediately apply to my work. The webinars featuring industry experts were not only informative but also sparked valuable discussions among participants. The skill testing modules helped me identify my strengths and areas for improvement, contributing to my professional development.",
    author: 'Emily H.',
    occupation: 'Financial Analyst',
  },
];

const playDelay = 7000;

export default function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, playDelay);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.reviewsSection}>
      <div className="container">
        <div className={styles.reviewsSection__content}>
          <div className={styles.reviewsSection__row}>
            <div className={styles.reviewsSection__quoteImg}></div>
            <div className={styles.reviewsSection__textSlider}>
              <div
                className={styles.reviewsSection__slides}
                style={{ marginLeft: `-${currentSlide * 100}%` }}
              >
                {slides.map((slide) => (
                  <div
                    className={styles.reviewsSection__textSlide}
                    key={slide.text}
                  >
                    <p className={styles.reviewsSection__textSlideContent}>
                      {slide.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.reviewsSection__sliderNavigation}>
              <SliderNavigation
                slides={slides}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                isBlack
              />
            </div>
          </div>
          <div className={styles.reviewsSection__creditsSlider}>
            <div
              className={styles.reviewsSection__slides}
              style={{ marginLeft: `-${currentSlide * 100}%` }}
            >
              {slides.map((slide) => (
                <div
                  className={styles.reviewsSection__creditSlide}
                  key={slide.text}
                >
                  <h6>{slide.occupation}</h6>
                  <h4>{slide.author}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
