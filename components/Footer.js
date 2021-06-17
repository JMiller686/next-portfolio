import footerStyles from '../styles/Footer.module.scss'

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <footer className={footerStyles.footer}>
            &copy; Josh Miller {year}
        </footer>
    )
}

export default Footer;
