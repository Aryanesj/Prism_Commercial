import React from 'react'
import { ReactComponent as ArrowRight } from '../../../images/IntroSection/Icon.svg'
import styles from './IntroSection.module.scss'

const IntroSection = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.intro__container}>
                <h1>Prism</h1>
                <p>Аналітика ризиків за 15 напрямками</p>
            </div>
            <button className={styles.intro__btn}>
                Напрямки та інструменти <br /> аналізу
                <ArrowRight className={styles.intro__arrowRight}/>
            </button>
        </div>
    )
}

export default IntroSection