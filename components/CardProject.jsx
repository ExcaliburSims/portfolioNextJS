import React from "react";
import Link from "next/link";
import styles from "../styles/CardProject.module.scss";

function CardProject() {
  return (
    <div className={styles.cardProjet}>
      <div className={styles.cardContent}>
        <img src="/assets/ours.jpg" className={styles.cardImage} alt="projet" />
        <div className={styles.cardBloc}>
          <Link href="/">
            <a>Voir projet</a>
          </Link>
        </div>
        <p className="element--projet__titre">Mon google</p>
      </div>
    </div>
  );
}

export default CardProject;
