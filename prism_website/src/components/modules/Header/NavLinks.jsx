import React from 'react'
import PropTypes from 'prop-types'
import { menuData } from '../../data/MenuData'
import { ReactComponent as Arrow } from '../../../images/Header/Arrow.svg'
import styles from './Header.module.scss'

const NavLinks = (props) => {
    const { toggle } = props
    const { onFooterButtonClick } = props

    return (
        <ul>
            {menuData.map(({ title }, index) => (
                <li key={index} onClick={() => toggle(false)}>
                    <button className={styles.header__link} onClick={() => onFooterButtonClick(index)}>
                        {title}
                        <Arrow className={styles.header__arrow} />
                    </button>
                </li>
            ))}
        </ul>
    )
}

NavLinks.propTypes = { toggle: PropTypes.func }

export default NavLinks
