import ChartElement from './ChartElement';
import styles from './index.module.css';

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsSection__content}>
          <div className={styles.statsSection__row}>
            <ChartElement
              name={'Digital'}
              header={'Investment Fundamentals'}
              percentage={'32%'}
              barChartHeight={160}
              barChartColor={'#000000'}
              liList={[
                'Master the foundational principles of investing, from understanding different asset classes to risk management strategies.',
                'Gain insights into market trends, economic indicators, and factors influencing investment decisions.',
              ]}
            />
            <ChartElement
              name={'Financial'}
              header={'Advanced Investment Strategies'}
              percentage={'57%'}
              barChartHeight={219}
              barChartColor={'#FFD531'}
              liList={[
                'Explore advanced techniques for identifying market trends and optimizing entry and exit points.',
                'Understand the complexities of options, futures, and other derivatives for sophisticated investment strategies.',
              ]}
            />
            <ChartElement
              name={'Technology'}
              header={'Portfolio Optimization'}
              percentage={'42%'}
              barChartHeight={151}
              barChartColor={'#DBDBDB'}
              liList={[
                'Craft a well-balanced investment portfolio tailored to your risk tolerance, financial goals, and time horizon.',
                'Learn how to diversify effectively across various asset classes to enhance portfolio resilience.',
              ]}
            />
            <ChartElement
              name={'Marketing'}
              header={'Risk Management'}
              percentage={'9%'}
              barChartHeight={98}
              barChartColor={'#DBDBDB'}
              liList={[
                'Develop a robust risk management plan to protect your investments in various market conditions.',
                'Navigate market volatility with confidence by employing effective risk mitigation strategies.',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
