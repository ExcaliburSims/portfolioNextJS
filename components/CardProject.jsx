import React from "react";
import Link from "next/link";
import styles from "../styles/CardProject.module.scss";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

function CardProject(props) {
  return (
    <div className={styles.cardProjet}>
      <div className={styles.cardContent}>
        <img src={props.pic.src} className={styles.cardImage} alt="projet" />
        <div className={styles.cardBloc}>
          <Link href="/">
            <a>Voir projet</a>
          </Link>
        </div>
        <p className="element--projet__titre">{props.title}</p>
      </div>
    </div>
  );
}

export default CardProject;
