import styles from "../styles/components/ModalMenuMobile.module.css";

export default function ModalMenuMobile() {
  return (
    <div className={styles.containerModalMobile}>
      <div className={styles.modalMobileMenu}>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
        </ul>

        <div>
          <a href="#">Login</a>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  );
}