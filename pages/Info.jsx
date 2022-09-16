import Link from 'next/link'
import React from 'react'
import styles from '../styles/Info.module.scss'

function Info() {
	return (
		<div className={styles.container}>
      <p>Infos</p>
			<h2>Qui suis-je ?</h2>
			<div>
        {/* <Image src={AboutImg} className='rounded-xl' alt='/' /> */}
			</div>
      <div>    
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
	)
}

export default Info