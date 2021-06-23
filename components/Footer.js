import footerStyles from '../styles/Footer.module.scss'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={footerStyles.footer}>
            <p>&copy; Josh Miller {year}</p>
            <p className={footerStyles.builtWith}><a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">Built with Next.js</a></p>
        </footer>
    )
}

export default Footer;
