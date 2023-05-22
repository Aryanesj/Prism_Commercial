import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { menuData } from '../../data/MenuData'
import { ReactComponent as Arrow } from '../../../images/Header/Arrow.svg'
import styles from './Header.module.scss'

const NavLinks = (props) => {
    const { toggle } = props

    return (
        <ul>
            {menuData.map(({ link, title }, index) => (
                <li key={index} onClick={() => toggle(false)} >
                    <NavLink to={link} className={styles.header__link} >
                        {title}
                        <Arrow className={styles.header__arrow} />
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

NavLinks.propTypes = { toggle: PropTypes.func }

export default NavLinks