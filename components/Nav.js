import navStyles from '../styles/NavStyles.module.scss'
import {BiHome, BiUser, BiWrench, BiGridAlt, BiMessageAltDetail} from "react-icons/bi"

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <a href="/"><BiHome /> <span className={navStyles.navItemText}>Home</span></a>
                </li>
                <li>
                    <a href="#about"><BiUser /> <span className={navStyles.navItemText}>About</span></a>
                </li>
                <li>
                    <a href="#skills"><BiWrench /> <span className={navStyles.navItemText}>Skills</span></a>
                </li>
                <li>
                    <a href="#work"><BiGridAlt /> <span className={navStyles.navItemText}>Work</span></a>
                </li>
                <li>
                    <a href="#contact"><BiMessageAltDetail /> <span className={navStyles.navItemText}>Contact</span></a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
