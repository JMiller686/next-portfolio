import titleStyles from '../styles/PageTitle.module.scss'

const PageTitle = (props) => {
    return (
        <div className={titleStyles.titleWrap}>
            <p className={titleStyles.eyebrow}>{props.eyebrow}</p>
            <h1 className={titleStyles.pageTitle}>{props.title}</h1>
        </div>
    )
}

export default PageTitle;
