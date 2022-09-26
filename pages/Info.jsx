import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Info.module.scss";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaDownload,
} from "react-icons/fa";

function Info() {
  return (
    <div className={styles.container} id="Info">
      <div className={styles.title}>
        <h2 data-entete="Information personnelle">Qui suis-je ?</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.imgprofil}>
          <img src="/assets/ours.jpg" className="image_profl" alt="profil" />
          <ul>
            <li>
              <Link href="/">
                <FaTwitter className={styles.fab} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                <FaLinkedin className={styles.fab} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                <FaTelegram className={styles.fab} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                <FaGithub className={styles.fab} aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.proposinfo}>
          <p className={styles.paragraphe}>
            Je suis <span>Siméon Zilu</span>&#44;&nbsp;
            <span>ingénieur logiciel</span>&nbsp;spécialisé notamment dans les
            technologies Web et mobile. Mon savoir-faire est basé principalement
            sur l'écosystème Javascript.
          </p>
          <Link href="activite">
            <a>
              <FaDownload />
              &nbsp;Mon CV
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
