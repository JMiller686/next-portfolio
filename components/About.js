import SectionTitle from './SectionTitle'
import ContentBox from '../components/ContentBox'

import pageStyles from '../styles/Page.module.scss'


const About = () => {
    return (
        <section className={pageStyles.container} id="about">
            <SectionTitle eyebrow='Some Info' title='About Me' />

            <ContentBox>
                <p>I'm a <span className={pageStyles.highlight}>Front-End Web Developer</span> with 6 years of experience building elegant and user friendly websites.  A motivated self starter who is passionate about solving modern day problems with modern day solutions.  My goal is to expand my skillset to become a full-stack react developer. Check back often to see updated work!</p>
            </ContentBox>
            
        </section>
    )
}

export default About;