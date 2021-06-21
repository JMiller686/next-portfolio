import footerStyles from '../styles/Footer.module.scss'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={footerStyles.footer}>
            <p>&copy; Josh Miller {year}</p>
        </footer>
    )
}

export default Footer;
