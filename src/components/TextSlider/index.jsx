import styles from './index.module.css';

const index = ({ slides, currentSlide }) => {
  return (
    <div className={styles.textSlider}>
      <div
        className={styles.textSlider__slides}
        style={{ transform: `translateX(${currentSlide * -100}%)` }}
      >
        {slides.map((slide) => (
          <div className={styles.textSlider__textSlide} key={slide.text}>
            <p className={styles.textSlider__textSlideContent}>{slide.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
