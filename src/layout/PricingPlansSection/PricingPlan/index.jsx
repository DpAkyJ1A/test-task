import { Button } from '@/components';
import styles from './index.module.css';

export default function PricingPlan({
  name,
  price,
  description,
  advantages,
  comment,
}) {
  return (
    <div className={styles.pricingPlan}>
      <h4>{name}</h4>
      <div>
        €{price}
        <span>/ Month</span>
      </div>
      <p>{description}</p>
      <ul>
        {advantages?.map((advantage) => (
          <li key={advantage}>{advantage}</li>
        ))}
      </ul>
      <p className={styles.pricingPlan__comment}>{comment}</p>
      <Button>Subscribe Now</Button>
    </div>
  );
}
