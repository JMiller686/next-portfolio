import Head from 'next/head'
import Main from '../components/Main'
import sectionStyles from '../styles/Section.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keywords" content="web development, web development chicago, programmer chicago, web design, react developer" />
        <meta name="description" content="Josh Miller is a Front-End Developer serving the Chicagoland area. If you are intersted in working together please give me a call at 773-962-1340."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <title>Josh Miller | Front-End Developer</title>
        
      </Head>

      <Main>
        <section id={sectionStyles.home}></section>
        <section id={sectionStyles.about}></section>
        <section id={sectionStyles.skills}></section>
        <section></section>
      </Main>
    </>
  )
}
