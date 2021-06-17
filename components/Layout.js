import Sidebar from './Sidebar';
import Footer from './Footer'

import layoutStyles from '../styles/Layout.module.scss'


const Layout = ({children}) => {
    return (
        <div className={layoutStyles.container}>
            <Sidebar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
