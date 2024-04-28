import PricingPlan from './PricingPlan';
import styles from './index.module.css';

const pricingPlansData = [
  {
    name: 'Basic package',
    price: 'XXXX',
    description:
      'Perfect for professionals and entrepreneurs looking to enhance their skills and knowledge.',
    advantages: [
      '6 new e-books per month',
      '3 business consultations online with personal business manager',
      '3 business skill tests',
      'Exclusive expertise and insights from seasoned business specialists',
      '24/7 customer support',
      'E-certificate',
    ],
    comment: [
      '*Purchase now for just ',
      <b key={'b'}>€X.XX</b>,
      ' and get a 3-day trial period',
    ],
  },
  {
    name: 'Advanced package',
    price: 'XXXX',
    description:
      'Ideal for mid-level managers, business consultants, and those aiming for a deeper understanding of industry trends.',
    advantages: [
      '6 new e-books per month',
      '3 business consultations online with personal business manager',
      '3 business skill tests',
      'Exclusive expertise and insights from seasoned business specialists',
      '24/7 customer support',
      'E-certificate',
    ],
    comment: [
      '*Purchase now for just ',
      <b key={'b'}>€X.XX</b>,
      ' and get a 3-day trial period',
    ],
  },
  {
    name: 'Premium package',
    price: 'XXXX',
    description:
      'Crafted for small to medium-sized businesses and entrepreneurs ready to take their ventures to the next level.',
    advantages: [
      '9 new e-books per month',
      '3 business consultations online with personal business manager',
      '3 business skill tests',
      'Exclusive expertise and insights from seasoned business specialists',
      '24/7 customer support',
      'E-certificate',
    ],
    comment: [
      '*Purchase now for just ',
      <b key={'b'}>€X.XX</b>,
      ' and get a 3-day trial period',
    ],
  },
];

export default function PricingPlansSection() {
  return (
    <section className={styles.pricingPlansSection}>
      <div className="container">
        <div className={styles.pricingPlansSection__content}>
          <h2>Pricing Plans</h2>
          <div className={styles.pricingPlansSection__row}>
            {pricingPlansData.map((pricingPlanData) => (
              <PricingPlan key={pricingPlanData.name} {...pricingPlanData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
