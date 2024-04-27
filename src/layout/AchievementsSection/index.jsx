import styles from './index.module.css';

export default function AchievementsSection() {
  return (
    <section className={styles.achievementsSection}>
      <div className="container">
        <div className={styles.achievementsSection__content}>
          <div className={styles.achievementsSection__row}>
            <div className={styles.achievementsSection__achievementBlock}>
              <h3>From strategy to delivery</h3>
            </div>
            <div className={styles.achievementsSection__achievementBlock}>
              <div className={styles.achievementsSection__row}>
                <div className={styles.achievementsSection__achievement}>
                  <span>32K</span>
                  <p>
                    Successful training sessions conducted, our services has a
                    proven track record of transforming challenges into
                    opportunities.
                  </p>
                </div>
                <div className={styles.achievementsSection__achievement}>
                  <span>92%</span>
                  <p>
                    We take pride in our commitment to client satisfaction,
                    reflected in an impressive 92% rate of happy clients.
                  </p>
                </div>
                <div className={styles.achievementsSection__achievement}>
                  <span>5/5</span>
                  <p>
                    Clients consistently rate our consultancy services with an
                    average score of 5 out of 5.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
