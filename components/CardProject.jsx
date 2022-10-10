import React from "react";
import Link from "next/link";
import styles from "../styles/CardProject.module.scss";

function CardProject(props) {
  return (
    <div className={styles.cardProjet}>
      <div className={styles.cardContent}>
        <img src={props.pic} className={styles.cardImage} alt="projet" />
        <div className={styles.cardBloc}>
          <Link href={props.link}>
            <a target="_blank">Voir projet</a>
          </Link>
        </div>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default CardProject;
