import pageTitle from '../components/PageTitle'

import pageStyles from '../styles/Page.module.scss'

const work = () => {
    return (
        <div className={pageStyles.container}>
            <PageTitle eyebrow='Check Out My' title='Work' />
        </div>
    )
}

export default work;
