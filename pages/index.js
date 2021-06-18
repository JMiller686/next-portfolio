import Head from 'next/head'

import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import PageTitle from '../components/PageTitle'
import ContentBox from '../components/ContentBox'

import pageStyles from '../styles/Page.module.scss'
import formStyles from '../styles/Form.module.scss'


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
        
        <Header />

        <About />

        <Skills />

        <Work />

        <section id="contact">
          <PageTitle eyebrow='Get in touch' title='Contact' />

          <ContentBox>
            <form action="" className={formStyles.contactForm}>
              <div className={formStyles.formControl}>
                <input type="text" id="name" placeholder="Name*" className={formStyles.input}/>
                <label htmlFor="name" className={formStyles.label}>Name*</label>
              </div>

              <div className={formStyles.formControl}>
                <input type="email" id="email" placeholder="Email*" className={formStyles.input}/>
                <label htmlFor="email" className={formStyles.label}>Email*</label>
              </div>

              <div className={formStyles.formControl}>
                <input type="subject" id="subject" placeholder="Subject*" className={formStyles.input}/>
                <label htmlFor="subject" className={formStyles.label}>Subject*</label>
              </div>

              <div className={formStyles.formControl}>
                <input type="message" id="message" placeholder="Message*" className={formStyles.input}/>
                <label htmlFor="message" className={formStyles.label}>Message*</label>
              </div>
            </form>
          </ContentBox>
        </section>
      </div>
      
    </>
  )
}
