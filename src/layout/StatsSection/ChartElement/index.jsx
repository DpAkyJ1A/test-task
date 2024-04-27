import styles from './index.module.css';

export default function ChartElement({
  name,
  header,
  percentage,
  barChartHeight,
  barChartColor,
  liList,
}) {
  return (
    <div className={styles.chartElement}>
      <h5 className={styles.chartElement__name}>{name}</h5>
      <h3 className={styles.chartElement__header}>{header}</h3>
      <div className={styles.chartElement__barChart}>
        <span className={styles.chartElement__barChartPercentage}>
          {percentage}
        </span>
        <div
          className={styles.chartElement__barChartFilled}
          style={{
            height: barChartHeight + 'px',
            backgroundColor: barChartColor,
          }}
        ></div>
      </div>
      <ul>
        {liList && liList.map((liText) => <li key={liText}>{liText}</li>)}
      </ul>
    </div>
  );
}
