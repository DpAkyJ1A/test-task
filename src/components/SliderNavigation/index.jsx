import styles from './index.module.css';

const index = ({ slides, currentSlide, setCurrentSlide, isBlack }) => {
  return (
    <div className={styles.sliderNavigation}>
      {slides.map((_, i) => (
        <div
          className={`${styles.sliderNavigation__button} ${
            currentSlide === i && styles.sliderNavigation__button_active
          } ${isBlack && styles.sliderNavigation__button_black}`}
          onClick={() => {
            setCurrentSlide(i);
          }}
          key={i}
        ></div>
      ))}
    </div>
  );
};

export default index;
