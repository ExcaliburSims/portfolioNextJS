import React from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'

function Header() {
	return (
		<nav className={styles.navbar}>
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