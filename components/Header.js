import headerStyles from  '../styles/Header.module.scss'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from 'next/image'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.headerContentLeft}>
                <div className={headerStyles.headerImgWrap}>
                    <Image src="/joshmiller.jpeg" alt="Josh Miller | Front-End Developer" width={350} height={350} layout="responsive" className={headerStyles.headerImg} />
                </div>
            </div>
            
            
            <div className={headerStyles.introWrap}>
                <h1 className={headerStyles.name}><span className={headerStyles.orange}>Josh</span> Miller</h1>
                <p className={headerStyles.intro}>A <span className={headerStyles.orange}>Front-End Developer</span> with a passion for creating rich and interactive experiences for the web.</p>

                <div className={headerStyles.buttonWrap}>
                    <a href="/Josh-Miller-Resume.pdf" className={headerStyles.resumeBtn} download>Resum&#xC9;</a>
                    <a href="https://www.linkedin.com/in/jmiller686/" target="_blank" rel="noreferrer noopener" className={headerStyles.socialBtn}><FaLinkedin /></a>
                    <a href="https://github.com/JMiller686" target="_blank" rel="noreferrer noopener" className={headerStyles.socialBtn}><FaGithub /></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
