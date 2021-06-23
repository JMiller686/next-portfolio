import navStyles from '../styles/Sidebar.module.scss'
import {BiHome, BiUser, BiCodeAlt, BiGridAlt, BiMessageAltDetail} from "react-icons/bi"
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="#home">
                        <a><BiHome /> <span className={navStyles.navItemText}>Home</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <a><BiUser /> <span className={navStyles.navItemText}>About</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="#skills">
                        <a><BiCodeAlt /> <span className={navStyles.navItemText}>Skills</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="#work">
                        <a><BiGridAlt /> <span className={navStyles.navItemText}>Work</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <a><BiMessageAltDetail /> <span className={navStyles.navItemText}>Contact</span></a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
