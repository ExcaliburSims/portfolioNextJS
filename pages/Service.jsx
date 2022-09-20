import React from "react";
import CardServices from "../components/CardServices";
import styles from "../styles/Service.module.scss";

function Service() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 data-entete="Services">Qu'est-ce que je fais ?</h2>
      </div>
      <div className={styles.content}>
        <CardServices />
      </div>
    </div>
  );
}

export default Service;
