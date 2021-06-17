import mainStyles from '../styles/Main.module.scss'

export const Main = ({children}) => {
    return (
        <main className={mainStyles.main}>
            {children}
        </main>
    )
}

export default Main;
