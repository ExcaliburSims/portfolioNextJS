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
import data from "../data.json";

function Info() {
  const downloader = () => {
    console.log("OKEY");
  };
  /* data.profil.map((dat) => console.log(dat.firstname)); 
  console.log(data.profil[0]);
  console.log(data.profil[0].contacts.telephone);*/
  return (
    <div className={styles.container} id="Info">
      <div className={styles.title}>
        <h2 data-entete="Information personnelle">Qui suis-je ?</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.imgprofil}>
          <img
            src="https://res.cloudinary.com/dgtogz0pp/image/upload/v1665424079/Portfolio/profil_ni2nrq.png"
            className="image_profl"
            alt="profil"
          />
          <ul>
            <li>
              <Link href={data.profil[0].contacts.twitter}>
                {/* <a target="_blank"> */}
                <FaTwitter className={styles.fab} aria-hidden="true" />
                {/* </a> */}
              </Link>
            </li>
            <li>
              <Link
                href={data.profil[0].contacts.linkedin}
                className={styles.link}
              >
                {/* <a target="_blank"> */}
                <FaLinkedin className={styles.fab} aria-hidden="true" />
                {/* </a> */}
              </Link>
            </li>
            <li>
              <Link
                href={data.profil[0].contacts.telegram}
                className={styles.link}
              >
                {/* <a target="_blank"> */}
                <FaTelegram className={styles.fab} aria-hidden="true" />
                {/* </a> */}
              </Link>
            </li>
            <li>
              <Link
                href={data.profil[0].contacts.github}
                className={styles.link}
              >
                {/* <a target="_blank"> */}
                <FaGithub className={styles.fab} aria-hidden="true" />
                {/* </a> */}
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
          <Link href={data.profil[0].cv}>
            <a target="_blank">
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
