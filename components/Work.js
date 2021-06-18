import PageTitle from '../components/PageTitle'
import ContentBox from '../components/ContentBox'

import pageStyles from '../styles/Page.module.scss'

const Work = () => {
    return (
        <section className={pageStyles.container} id="work">
            <PageTitle eyebrow='Check Out My' title='Work' />

            <ContentBox></ContentBox>
        </section>
    )
}

export default Work;
