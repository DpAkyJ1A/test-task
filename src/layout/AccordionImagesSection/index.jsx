import AccordionImg from './AccordionImg';
import styles from './index.module.css';
import accordionImg1 from '../../assets/img/accordionImg1.png';
import accordionImg2 from '../../assets/img/accordionImg2.png';
import accordionImg3 from '../../assets/img/accordionImg3.png';
import accordionImg4 from '../../assets/img/accordionImg4.png';

export default function AccordionImagesSection() {
  return (
    <section className={styles.accordionImagesSection}>
      <div className="container">
        <div className={styles.accordionImagesSection__row}>
          <AccordionImg
            src={accordionImg1}
            name={'Business'}
            header={'Innovative Leadership Strategies'}
            hiddenText={
              'Laborum commodo commodo do laborum cillum ea do irure dolore officia pariatur magna labore dolor.'
            }
          />
          <AccordionImg
            src={accordionImg2}
            name={'Business'}
            header={'Strategic Business Development'}
            hiddenText={
              'Laborum commodo commodo do laborum cillum ea do irure dolore officia pariatur magna labore dolor.'
            }
          />
          <AccordionImg
            src={accordionImg3}
            name={'Business'}
            header={'Effective Communication in the Digital Age'}
            hiddenText={
              'Laborum commodo commodo do laborum cillum ea do irure dolore officia pariatur magna labore dolor.'
            }
          />
          <AccordionImg
            src={accordionImg4}
            name={'Business'}
            header={'Digital Transformation and Technology Integration'}
            hiddenText={
              'Laborum commodo commodo do laborum cillum ea do irure dolore officia pariatur magna labore dolor.'
            }
          />
        </div>
      </div>
    </section>
  );
}
