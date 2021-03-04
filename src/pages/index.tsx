import Head from 'next/head';

import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import FirstSection from "../components/FirstSection";
import ShortenSection from "../components/ShortenSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import Footer from "../components/Footer";

import { ModalProvider } from '../context/ModalContext';

export default function Home() {

  return (
    <>
      <div className={styles.containerHeaderTop}>
        <Head>
          <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
        </Head>

        <ModalProvider>
          <Header />
        </ModalProvider>
        
        <div className={styles.containerBgImageRight}>
          <div className={styles.backgroundImageRight}/>
        </div>
        <FirstSection />
      </div>

      <div className={styles.containerAdvancedStatistics}>
        <div className={styles.containerWrapper}>
          <ShortenSection />
          <SecondSection />
        </div>
      </div>

      <div className={styles.containerBoost}>
        <div className={styles.containerBoostWrapper}>
          <ThirdSection />
        </div>
      </div>

      <Footer />
    </>
  )
}
