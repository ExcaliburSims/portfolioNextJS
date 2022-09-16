import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

function Main() {
	return (
		 <div className={styles.container}>
			<Header />
			<div className={styles.presentationCard}>
        <div className={styles.presentationCard_comment}>
					<div>
						<p>Construisons quelque chose ensemble</p>
            <h1>Je suis <span>Siméon Zilu</span></h1>
          	<h1>Ingenieur Logiciel</h1>
						<p>
							Je me concentre sur la construction d'applications web et mobile front-end et back-end réactives
          	</p>
						<Link href="activite"><a>Hire me</a></Link>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Main