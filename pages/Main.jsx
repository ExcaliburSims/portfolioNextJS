import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

function Main() {
	return (
    <div className={styles.container}>
      <Header />
      <div className={styles.presentationCard}>
        <div className={styles.presentationCard_comment}>
          <div className={styles.bloc_comment}>
            <p className={styles.paragraphe}>
              Construisons quelque chose ensemble
            </p>
            <h1 className={styles.title}>
              Je suis <span>Siméon Zilu</span>
            </h1>
            <h1 className={styles.title}>Ingenieur Logiciel</h1>
            <p className={styles.paragraphe}>
              Je me concentre sur la construction d'applications web et mobile
              front-end et back-end réactives
            </p>
            <Link href="/#Contact">
              <a>Hire me</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main