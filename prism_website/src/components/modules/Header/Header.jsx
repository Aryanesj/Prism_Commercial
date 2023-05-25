import React from 'react'
import Navigation from './Navigation/Navigation.jsx'
import logo from '../../../images/Header/PrismLogo.svg'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__logo}>
                        <a href="/" className={styles.header__logoLink}
                            data-aos="zoom-out"
                            data-aos-delay="1000"
                            data-aos-duration="1800"
                        >
                            <img src={logo} alt="Prism logo" />
                        </a>
                    </div>
                    <Navigation />
                </div>
            </div>
        </header>
    )
}

export default Header