import Sidebar from './Sidebar';

import layoutStyles from '../styles/Layout.module.scss'


const Layout = () => {
    return (
        <div>
            <Sidebar />

            <main>
                <section id={layoutStyles.home}></section>
                <section id="about"></section>
                <section id="skills"></section>
                <section id="work"></section>
                <section id="contact"></section>
            </main>
        </div>
    )
}

export default Layout;
