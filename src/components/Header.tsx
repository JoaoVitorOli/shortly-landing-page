import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import styles from "../styles/components/Header.module.css";

export default function Header() {
  const { isModalHamOpen ,openModalHam, closeModalHam } = useContext(ModalContext);

  return (
      <header className={styles.container}>
        <div className={styles.logoLists}>
          <img src="/logo.svg" alt="Logo"/>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>

        <div className={styles.LoginSignup}>
          <a href="#">Login</a>
          <button type="button">Sign up</button>
        </div>

        { isModalHamOpen ? (
          <button className={styles.buttonHamburguer} onClick={closeModalHam}>
            <img src="/close.png" alt="Botao fechar menu"/>
          </button>
        ) : (
          <button className={styles.buttonHamburguer} onClick={openModalHam}>
            <img src="/botao-de-menu.png" alt="Botao menu"/>
          </button>
        ) }
        
        
      </header>
  );
}