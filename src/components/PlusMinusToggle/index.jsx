import styles from './index.module.css';

const index = ({ opened, setOpened }) => {
  return (
    <div
      className={`${styles.toggle} ${opened && styles.toggle_opened}`}
      onClick={() => {
        setOpened((prev) => !prev);
      }}
    >
      <span></span>
    </div>
  );
};

export default index;
