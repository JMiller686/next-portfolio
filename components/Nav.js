import navStyles from '../styles/Sidebar.module.scss'
import {BiHome, BiUser, BiCodeAlt, BiGridAlt, BiMessageAltDetail} from "react-icons/bi"
import Link from 'next/link'

const Nav = ({handleClick}) => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="#home">
                        <a onClick={handleClick}><BiHome /> <span className={navStyles.navItemText}>Home</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="#about" onClick={handleClick}>
                        <a onClick={handleClick}><BiUser /> <span className={navStyles.navItemText}>About</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="#skills" onClick={handleClick}>
                        <a onClick={handleClick}><BiCodeAlt /> <span className={navStyles.navItemText}>Skills</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="#work" onClick={handleClick}>
                        <a onClick={handleClick}><BiGridAlt /> <span className={navStyles.navItemText}>Work</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="#contact" onClick={handleClick}>
                        <a onClick={handleClick}><BiMessageAltDetail /> <span className={navStyles.navItemText}>Contact</span></a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
