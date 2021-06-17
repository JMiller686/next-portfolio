import PageTitle from '../components/PageTitle'
import ContentBox from '../components/ContentBox'

import pageStyles from '../styles/Page.module.scss'


const about = () => {
    return (
        <div className={pageStyles.container}>
            <PageTitle eyebrow='Some Info' title='About Me' />

            <ContentBox>
                <p>I'm a <span className={pageStyles.highlight}>Front-End Web Developer</span> with 6 years of experience building elegant and user friendly websites.  I am self taught programmer who passionate about solving modern day problems with modern day solutions.  My hope is to soon join a team of react developers and expand my skillset even more. Check back often to see updated work!</p>
            </ContentBox>
        </div>
    )
}

export default about;
