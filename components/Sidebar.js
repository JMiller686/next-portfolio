import sidebarStyles from '../styles/Sidebar.module.scss'
import Nav from './Nav'

const Sidebar = () => {
    return (
        <aside className={sidebarStyles.sidebar}>
            <div className={sidebarStyles.logoWrap}>
                {/*<img src="" alt=""/>*/}
                <h1>JM</h1>
            </div>
            <Nav />
        </aside>
    )
}

export default Sidebar;
