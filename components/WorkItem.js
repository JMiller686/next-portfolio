import workStyles from '../styles/WorkItem.module.scss'
import Image from 'next/image'

const WorkItem = ({imgSrc, imgAlt, title, description, siteUrl}) => {
    return (
        <div className={workStyles.workItem}>
            <div className={workStyles.workItemImgWrap}>
                <Image 
                    src={imgSrc} 
                    alt={imgAlt}
                    width={340}
                    height={220}
                    layout="responsive" 
                    className={workStyles.workItemImg} />
            </div>

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
