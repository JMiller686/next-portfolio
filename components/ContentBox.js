import pageStyles from '../styles/Page.module.scss'

const ContentBox = ({children}) => {
    return (
        <div className={pageStyles.contentBox}>
            {children}
        </div>
    )
}

export default ContentBox;
