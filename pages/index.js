import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'
import Info from './Info'
import Main from './Main'
import Service from './Service'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SimsZilu | Developper Fullstack</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Main />
      <Info />
      <Service />
    </div>
  )
}
