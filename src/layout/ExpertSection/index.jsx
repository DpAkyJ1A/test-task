import styles from './index.module.css';
import expertSectionImg from '../../assets/img/expertSectionImg.png';
import bitcoinImg from '../../assets/img/bitcoin.png';
import { Button } from '@/components';

export default function ExpertSection() {
  return (
    <section className={styles.expertSection}>
      <div className="container">
        <div className={styles.expertSection__content}>
          <div className={styles.expertSection__contentColumn}>
            <h2>Expert Appointments</h2>
            <img src={bitcoinImg} alt="bitcoin" />
            <h3>Expert Directory</h3>
            <p>
              Schedule virtual appointments with ease. Our user-friendly booking
              system ensures a seamless experience, allowing you to access
              personalized advice and strategies.
            </p>
            <Button>Read More</Button>
          </div>
          <img src={expertSectionImg} alt="Expert Appointments image" />
        </div>
      </div>
    </section>
  );
}
