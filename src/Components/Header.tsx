
import styles from './Header.module.scss'
import rocket from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <strong className={styles.logoContainer}>
              <img src={rocket} alt="logo" />
              <p>to<span>do</span></p>
            </strong>
        </header>
    )
}