import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio|SimsZilu</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Header />
    </div>
  )
}
