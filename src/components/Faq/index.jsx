import { PlusMinusToggle } from '..';
import styles from './index.module.css'; // Подключаем файл стилей
import { useState } from 'react';

const index = ({ faqData }) => {
  const [openStates, setOpenStates] = useState(
    Array(faqData.length).fill(false)
  );

  const toggleOpenState = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className={styles.faq}>
      {faqData &&
        faqData.map((faqElement, i) => (
          <div className={styles.faq__element} key={faqElement.header}>
            <div className={styles.faq__row}>
              <h3>{faqElement.header}</h3>
              <PlusMinusToggle
                opened={openStates[i]}
                setOpened={() => toggleOpenState(i)}
              />
            </div>
            <div
              className={`${styles.faq__elementHiddenContentWrapper} ${
                openStates[i] && styles.faq__elementHiddenContentWrapper_opened
              }`}
            >
              <div className={styles.faq__elementHiddenContent}>
                <div>{faqElement.content}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default index;
