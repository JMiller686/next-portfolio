import Sidebar from './Sidebar';
import Footer from './Footer'

import layoutStyles from '../styles/Layout.module.scss'


const Layout = ({children}) => {
    return (
        <div className={layoutStyles.container}>
            <Sidebar />

            <main className={layoutStyles.main} id="home">
                {children}
            </main>
            
            <Footer className={layoutStyles.footer} />
        </div>
    )
}

export default Layout;
