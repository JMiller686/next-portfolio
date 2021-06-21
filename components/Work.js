import SectionTitle from './SectionTitle'
import ContentBox from '../components/ContentBox'

import pageStyles from '../styles/Page.module.scss'

const Work = () => {
    return (
        <section className={pageStyles.container} id="work">
            <SectionTitle eyebrow='Check Out My' title='Work' />

            <ContentBox></ContentBox>
        </section>
    )
}

export default Work;
