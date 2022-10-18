import React from "react";
import styles from "../styles/CardServices.module.scss";

function CardServices(props) {
  return (
    <div className={styles.cardService}>
      <div className={styles.cardIcon}>{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default CardServices;
