import sidebarStyles from '../styles/Sidebar.module.scss'
import Nav from './Nav'

import {useState, useEffect} from 'react';

const Sidebar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    }

    return (
        <>
            <div className={`menuToggle ${menuActive ? 'toggleActive' : ''}`} onClick={handleMenuToggle}>
                <span className="t"></span>
                <span className="mt"></span>
                <span className="mb"></span>
                <span className="b"></span>
            </div>

            <aside className={`${sidebarStyles.sidebar} ${menuActive ? 'mobileMenuActive' : ''}`}>
                <div className={sidebarStyles.logoWrap}>
                    <h1>JM</h1>
                </div>
                <Nav/>
            </aside>
        </>
    )
}

export default Sidebar;
