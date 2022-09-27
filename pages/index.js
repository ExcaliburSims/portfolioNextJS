import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Contact from './Contact'
import Info from './Info'
import Main from './Main'
import Project from './Project'
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
      <Project />
      <Contact />
     <Footer />
    </div>
  )
}
