import styles from './index.module.css';
import slide1 from '../../assets/img/slide1.png';
import slide2 from '../../assets/img/slide2.png';
import slide3 from '../../assets/img/slide3.png';
import { useState, useEffect } from 'react';
import { Button, SliderNavigation } from '@/components';

const slides = [
  {
    src: slide1,
    alt: 'Business Consultancy Services with a blurred image of a person',
    text: 'Business Consultancy Services',
  },
  {
    src: slide2,
    alt: 'Inspiring Insights and Skills with a blurred image of a group of people',
    text: ['Inspiring Insights', <br key="br" />, 'and Skills'],
  },
  {
    src: slide3,
    alt: 'Business Development Management with a blurred image of a group of people',
    text: 'Business Development Management',
  },
];

const playDelay = 70000000000;

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
    <section className={styles.sliderSection}>
      <div className="container">
        <div className={styles.sliderSection__imgSlider}>
          <div
            className={styles.sliderSection__slides}
            style={{ marginLeft: `-${currentSlide * 100}%` }}
          >
            {slides.map((slide) => (
              <div className={styles.sliderSection__imgSlide} key={slide.text}>
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sliderSection__content}>
          <div className={styles.sliderSection__row}>
            <div
              className={styles.sliderSection__leftArrow}
              onClick={prevSlide}
            ></div>
            <div className={styles.sliderSection__textSlider}>
              <div
                className={styles.sliderSection__slides}
                style={{ marginLeft: `-${currentSlide * 100}%` }}
              >
                {slides.map((slide) => (
                  <div
                    className={styles.sliderSection__textSlide}
                    key={slide.text}
                  >
                    <p className={styles.sliderSection__textSlideContent}>
                      {slide.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={styles.sliderSection__rightArrow}
              onClick={nextSlide}
            ></div>
          </div>
          <Button className={styles.sliderSection__btn}>Read More</Button>
          <div className={styles.sliderSection__sliderNavigation}>
            <SliderNavigation
              slides={slides}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
