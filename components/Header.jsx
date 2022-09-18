import React, { useState,useEffect } from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'

function Header() {
const [headerColor, setHeaderColor] = useState("")


const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor("#100f1d") : setHeaderColor("");
  }
useEffect(() => {
  window.addEventListener("scroll", listenScrollEvent)
})
	return (
		<nav className={styles.navbar} style={{backgroundColor:headerColor}}>
      <div className={styles.logo}>
        <Link href="/"><a>sims<span>zilu.</span></a></Link>
      </div>
      <ul>
      	<li>
          <Link href="/" className={styles.link}>Accueil</Link>
        </li>
        <li>
          <Link href="/" >Infos</Link>
				</li>
				<li>
					<Link href="/projets">Services</Link> 
				</li>
				<li>
					<Link href="/services">Contact</Link>  
				</li>
      	<li>     
					<Link href="/nosprogrammes">Agenda</Link>         
				</li>
      </ul>
    </nav>
	)
}

export default Header