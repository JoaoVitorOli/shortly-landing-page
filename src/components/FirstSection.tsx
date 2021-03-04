import styles from "../styles/components/FirstSection.module.css";

import Button from "../components/Button";

export default function Firstsection() {
  return (
    <section className={styles.container}>
      <h1>More than just shorter links</h1>

      <p>
        Build your brand’s recognition and get detailed insights 
        on how your links are performing.
      </p>

      <Button />
    </section>
  );
}