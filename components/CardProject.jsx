import React from "react";
import Link from "next/link";
import styles from "../styles/CardProject.module.scss";

function CardProject() {
  return (
    <div className={styles.cardProjet}>
      <img src="/assets/ours.jpg" className={styles.cardImage} alt="projet" />
      {/* <div className="element--projet__interieur --ombreExterieure">
        <div className="element--projet__img">
          <Link href="/">
            <a>Voir projet</a>
          </Link>
        </div>
        <p class="element--projet__titre">Mon google</p>
      </div> */}
    </div>
  );
}

export default CardProject;
