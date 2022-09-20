import React from "react";
import styles from "../styles/CardServices.module.scss";
import { FaMobileAlt } from "react-icons/fa";

function CardServices() {
  return (
    <div className={styles.service}>
      <div className={styles.icon}>
        <FaMobileAlt className={styles.iconpic} />
      </div>
      <h3>Responsive Design</h3>
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
