import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

function Main() {
	return (
		 <div className={styles.container}>
			<Header />
			{/*<div className={styles.sectionHome}>
				home
			</div> */}
			<div className={styles.presentationCard}>
        <div className={styles.presentationCard_comment}>
          <div>
            <h1>Benelux Afro Center</h1>
						<p>
							Benelux Afro Center est une association des membres de la diaspora africaine de Bruxelles dans un contexte d’une auto-prise en charge communautaire.
						</p>
						<Link href="activite"><a>Découvrir nos activités</a></Link>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Main