import Head from 'next/head'

import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'

import pageStyles from '../styles/Page.module.scss'



export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://mnmdevelopment.com" />
        <meta name="keywords" content="web development, web development chicago, programmer chicago, web design, react developer" />
        <meta name="description" content="Josh Miller is a Front-End Developer serving the Chicagoland area. If you are intersted in working together please give me a call at 773-962-1340."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <title>Josh Miller | Front-End Developer</title>
      </Head>

      <div className={pageStyles.container}>
        <Header />

        <About />

        <Skills />

        <Work />

        <Contact />        
      </div>
      
    </>
  )
}
