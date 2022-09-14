import React from 'react'
import Style from '../styles/Header.module.scss'
import Link from 'next/link'

function Header() {
	return (
		<div className={Style.banniere}>
			<Link href="/"><a>sims<span>zilu.</span></a></Link>
		</div>
	)
}

export default Header