import styles from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.containerWrapper}>
        <div>
          <img src="/logo-white.svg" alt="Logo white"/>
        </div>

        <div className={styles.containerList}>
          <div>
            <span>Features</span>
            <ul>
              <li> <a href="#">Link Shortening</a> </li>
              <li><a href="#">Branded Links</a></li>
              <li><a href="#">Analytic</a></li>
            </ul>
          </div>

          <div>
            <span>Resources</span>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div>
            <span>Company</span>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.containerImgSocialMedia}>
          <a href="http://facebook.com">
            <img src="/icon-facebook.svg" alt="Icon facebook"/>
          </a>

          <a href="http://twitter.com">
            <img src="/icon-twitter.svg" alt="Icon twitter"/>
          </a>

          <a href="http://pinterest.com">
            <img src="/icon-pinterest.svg" alt="Icon pinterest"/>
          </a>
          
          <a href="http://instagram.com">
            <img src="/icon-instagram.svg" alt="Icon instagram"/>
          </a>   
        </div>
      </div>
    </footer>
  );
}