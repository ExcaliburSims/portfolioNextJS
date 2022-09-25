import React, { useState,useEffect } from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import { useRouter } from "next/router";
import Project from "../pages/Project";

function Header() {
  const [headerColor, setHeaderColor] = useState("");
  const road = useRouter();

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor("#100f1d") : setHeaderColor("");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <nav className={styles.navbar} style={{ backgroundColor: headerColor }}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            sims<span>zilu.</span>
          </a>
        </Link>
      </div>
      <ul id="myUl">
        <li>
          <Link href="/" className={styles.active}>
            <a
              className={road.pathname == "/" ? styles.active : styles.inactive}
            >
              Accueil
            </a>
          </Link>
        </li>
        <li>
          <Link href="#Info" className={styles.active}>
            <a
              className={
                road.pathname == "#Info" ? styles.active : styles.inactive
              }
            >
              Infos
            </a>
          </Link>
        </li>
        <li>
          <Link href="#Service" className={styles.active}>
            <a
              className={
                road.pathname == "#Service" ? styles.active : styles.inactive
              }
            >
              Services
            </a>
          </Link>
        </li>
        <li>
          <Link href="#Project" className={styles.active}>
            <a
              className={
                road.pathname == "#Project" ? styles.active : styles.inactive
              }
            >
              Projets
            </a>
          </Link>
        </li>
        <li>
          <Link href="#Contact" className={styles.active}>
            <a
              className={
                road.pathname == "#Contact" ? styles.active : styles.inactive
              }
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header