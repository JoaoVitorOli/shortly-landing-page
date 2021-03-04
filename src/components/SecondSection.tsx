import styles from "../styles/components/SecondSection.module.css";

export default function SecondSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.bgLineCard} />
        <div className={styles.card}>
          <div className={styles.iconCard}>
            <img src="/icon-brand-recognition.svg" alt="Icon" />
          </div>
          
          <div>
            <span>Brand Recognition</span>
            <p>
              Boost your brand recognition with each click. Generic links don’t 
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>         
        </div>
        <div className={styles.card}>
          <div className={styles.iconCard}>
            <img src="/icon-detailed-records.svg" alt="Icon" />
          </div>
          
          <div>
            <span>Detailed Records</span>
            <p>
              Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions.
            </p>
          </div>        
        </div>
        <div className={styles.card}>
          <div className={styles.iconCard}>
            <img src="/icon-fully-customizable.svg" alt="Icon" />
          </div>
          
          <div>
            <span>Fully Customizable</span>
            <p>
              Improve brand awareness and content discoverability through customizable 
              links, supercharging audience engagement.
            </p>
          </div>         
        </div>
      </div>
    </div>
  );
}