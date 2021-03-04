import styles from "../styles/components/ThirdSection.module.css";

import Button from "../components/Button";

export default function ThirdSection() {
  return (
    <section className={styles.container}>
      <h1>Boost your links today</h1>
      <Button />
    </section>
  );
}