import pageStyles from '../styles/Page.module.scss'

const Header = () => {
    return (
        <header>
            <div className={pageStyles.introWrap}>

            </div>
            <h1>Hi! I'm <br/><span className={pageStyles.name}>Josh Miller</span></h1>
            <p className={pageStyles.intro}>A <span>Front-End Developer</span> with a passion for creating rich and interactive experiences for the web.</p>
        </header>
    )
}

export default Header;
