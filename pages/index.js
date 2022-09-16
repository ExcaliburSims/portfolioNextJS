import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'
import Main from './Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SimsZilu | Developper Fullstack</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Main />
    </div>
  )
}
