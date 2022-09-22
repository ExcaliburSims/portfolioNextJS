import React from "react";
import styles from "../styles/CardServices.module.scss";

function CardServices(props) {
  return (
    <div className={styles.cardService}>
      <div className={styles.cardIcon}>{props.icon}</div>
      <h3>{props.title}</h3>
      <p>
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </div>
  );
}

export default CardServices;
