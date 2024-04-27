import styles from './index.module.css';
import faqSectionImg from '../../assets/img/faqSectionImg.png';
import { Faq } from '@/components';

const faqData = [
  {
    header: 'Finance',
    content: [
      <p key={1}>
        {
          'Explore the intricate world of finance with our comprehensive resources. From personal finance tips to corporate financial strategies, we cover it all. Learn to make informed investment decisions, understand market trends, and navigate economic landscapes with confidence.'
        }
      </p>,
      <p key={2}>
        {
          "Whether you're an individual seeking financial stability or a business aiming for fiscal growth, our content is tailored to empower you on your financial journey."
        }
      </p>,
    ],
  },
  {
    header: 'Business',
    content: [
      <p key={1}>
        {
          'Explore the intricate world of finance with our comprehensive resources. From personal finance tips to corporate financial strategies, we cover it all. Learn to make informed investment decisions, understand market trends, and navigate economic landscapes with confidence.'
        }
      </p>,
      <p key={2}>
        {
          "Whether you're an individual seeking financial stability or a business aiming for fiscal growth, our content is tailored to empower you on your financial journey."
        }
      </p>,
    ],
  },
  {
    header: 'Technology',
    content: [
      <p key={1}>
        {
          'Explore the intricate world of finance with our comprehensive resources. From personal finance tips to corporate financial strategies, we cover it all. Learn to make informed investment decisions, understand market trends, and navigate economic landscapes with confidence.'
        }
      </p>,
      <p key={2}>
        {
          "Whether you're an individual seeking financial stability or a business aiming for fiscal growth, our content is tailored to empower you on your financial journey."
        }
      </p>,
    ],
  },
  {
    header: 'Strategies',
    content: [
      <p key={1}>
        {
          'Explore the intricate world of finance with our comprehensive resources. From personal finance tips to corporate financial strategies, we cover it all. Learn to make informed investment decisions, understand market trends, and navigate economic landscapes with confidence.'
        }
      </p>,
      <p key={2}>
        {
          "Whether you're an individual seeking financial stability or a business aiming for fiscal growth, our content is tailored to empower you on your financial journey."
        }
      </p>,
    ],
  },
];

export default function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.faqSection__content}>
          <img src={faqSectionImg} alt="Expert Appointments image" />
          <Faq faqData={faqData} />
        </div>
      </div>
    </section>
  );
}
