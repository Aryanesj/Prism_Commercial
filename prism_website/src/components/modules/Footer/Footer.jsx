import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuData } from '../../data/MenuData'
import { ReactComponent as MailIcon } from '../../../images/Footer/Mail.svg'
import { ReactComponent as PhoneIcon } from '../../../images/Footer/Phone.svg'
import PrismLogo from '../../../images/Footer/Logo.svg'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.footer__container}>
                <h1 className={styles.footer__title}>Контакти</h1>
                    <div className={styles.footer__mailBlock}>
                        <MailIcon />
                        <p className={styles.footer__mailText}>prism.ra2020@gmail.com</p>
                    </div>
                    <div className={styles.footer__phoneBlock}>
                        <PhoneIcon></PhoneIcon>
                        <p className={styles.footer__phoneText}>+38 063 244 83 85</p>
                    </div>
                    <div className={styles.footer__copyHeaderBlock}>
                        <a href="/" className={styles.footer__logoLink}>
                            <img src={PrismLogo} alt="Prism logo" />
                        </a>
                        <ul>
                            {menuData.map(({ link, title }, index) => (
                                <li key={index}>
                                    <NavLink to={link} className={styles.footer__link} >
                                        {title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
        </section>
    )
}

export default Footer