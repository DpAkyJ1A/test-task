import styles from './index.module.css';
import fakeVideo from '../../assets/img/fakeVideo.png';

export default function VideoSection() {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <div className={styles.videoSection__content}>
          <h2>Connect with Industry Pioneers</h2>
          <div className={styles.videoSection__videoContainer}>
            <img
              src={fakeVideo}
              alt="fake video titled Connect with Industry Pioneers"
            />
            <div className={styles.videoSection__playButton}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
