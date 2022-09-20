import React from "react";
import styles from "../styles/Project.module.scss";

function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 data-entete="Projet">Derniers Travaux</h2>
      </div>
      <div className={styles.content}></div>
    </div>
  );
}

export default Project;
