import Head from 'next/head'
import pageStyles from '../styles/Page.module.scss'
import homeStyles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keywords" content="web development, web development chicago, programmer chicago, web design, react developer" />
        <meta name="description" content="Josh Miller is a Front-End Developer serving the Chicagoland area. If you are intersted in working together please give me a call at 773-962-1340."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <title>Josh Miller | Front-End Developer</title>
        
      </Head>

      <div className={pageStyles.container}>
        <header>
            <div className={homeStyles.introWrap}>

            </div>
            <h1>Hi! I'm <br/><span className={homeStyles.name}>Josh Miller</span></h1>
            <p className={homeStyles.intro}>A <span>Front-End Developer</span> with a passion for creating rich and interactive experiences for the web.</p>
        </header>
      </div>
      
    </>
  )
}
