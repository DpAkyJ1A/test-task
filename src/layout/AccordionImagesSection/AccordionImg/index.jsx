import { useState } from 'react';
import styles from './index.module.css';

export default function AccordionImg({ src, name, header, hiddenText }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__ImgWrapper}>
        <img src={src} alt={header + ' image'} />
        <div
          className={`${styles.accordion__toggle} ${
            opened && styles.accordion__toggle_opened
          }`}
          onClick={() => setOpened((prev) => !prev)}
        >
          <span></span>
        </div>
      </div>
      <h5 className={styles.accordion__name}>{name}</h5>
      <h3 className={styles.accordion__header}>{header}</h3>
      <div
        className={`${styles.accordion__hiddenContentWrapper} ${
          opened && styles.accordion__hiddenContentWrapper_opened
        }`}
      >
        <div className={styles.accordion__hiddenContent}>
          <p>{hiddenText}</p>
        </div>
      </div>
    </div>
  );
}
