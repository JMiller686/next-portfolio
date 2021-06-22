import workStyles from '../styles/WorkItem.module.scss'

const WorkItem = ({imgSrc, imgAlt, title, description, siteUrl}) => {
    return (
        <div className={workStyles.workItem}>
            <img src={imgSrc} alt={imgAlt} className={workStyles.workItemImg}/>
            <div className={workStyles.workItemContent}>
                <div className={workStyles.workItemContentHeading}>
                    <h3 className={workStyles.workItemTitle}>{title}</h3>
                    <p className={workStyles.workItemDescription}>{description}</p>
                </div>
                
                <a href={siteUrl} className={workStyles.workItemLink} target="_blank" rel="noreferrer noopener">Live</a>
            </div>
        </div>
    )
}

export default WorkItem
