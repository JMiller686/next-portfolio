import titleStyles from '../styles/PageTitle.module.scss'

const SectionTitle = (props) => {
    return (
        <div className={titleStyles.titleWrap}>
            <p className={titleStyles.eyebrow}>{props.eyebrow}</p>
            <h2 className={titleStyles.pageTitle}>{props.title}</h2>
        </div>
    )
}

export default SectionTitle;
