import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Info.module.scss'
import {FaLinkedin, FaGithub, FaTwitter, FaTelegram} from "react-icons/fa";

function Info() {
	return (
		<div className={styles.container}>
      <h3>Infos</h3>
			<h2>Qui suis-je ?</h2>
			<div>
				<div className={styles.imgprofil}>
					{/* <p>
						Quand on prend les triangles rectangles, la politique. Chapitre abstrait 3 du conpendium : la prédestination. Quand on parle de relaxation, la politique. L’émergence ici c’est l’émulsion, c’est pas l’immersion donc  c’est clair provenant d'une dynamique syncronique. D'une manière ou d'une autre, l'ensemble des 5 sens. C’est à dire quand on parle de ces rollers,  mais oui possédant la francophonie. C’est à dire ici, c’est le contraire, au lieu de panacée,  Bonne Année off-shore. L’émergence ici c’est l’émulsion, c’est pas l’immersion donc la force. La convergence n’est pas la divergence,  mais oui possédant la francophonie. 
					</p> */}
					<img src='/assets/ours.jpg' className='rounded-xl' alt='profil' /* width={800} height={800}*/ />
					<ul>
						<li><Link href="/"><FaTwitter className={styles.fab} aria-hidden="true" /></Link></li>
						<li><Link href="#" className={styles.link}><FaLinkedin className={styles.fab} aria-hidden="true" /></Link></li>
						<li><Link href="#" className={styles.link}><FaTelegram className={styles.fab} aria-hidden="true" /></Link></li>
						<li><Link href="#" className={styles.link}><FaGithub className={styles.fab} aria-hidden="true" /></Link></li>
						{/* <li><Link href="#"><i class="fab fa-instagram" aria-hidden="true" /></Link></li> */}
				</ul>
				</div>
				<div className={styles.proposinfo}>    
					<p>
						have spent the last 12 years in the fire service working as a
						professional firefighter/paramedic. I have always had a knack for
						technology and working with computers. In 2019 I started working
						with HTML and CSS to make some minor edits on a small business
						website that I was operating. What I thought was just a few small
						edits turned into a love for programming.
					</p>
				</div>
			</div>
    </div>
	)
}

export default Info