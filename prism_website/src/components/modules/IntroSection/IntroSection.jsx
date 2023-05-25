import React from 'react'
import { ReactComponent as ArrowRight } from '../../../images/IntroSection/Icon.svg'
import styles from './IntroSection.module.scss'

const IntroSection = ({ onButtonClick }) => {
    return (
        <div className={styles.intro}>
            <div className={styles.intro__container}>
                <h1
                    data-aos="fade-down"
				    data-aos-duration="1500"
					data-aos-delay="200"
					data-aos-once="true"
					data-aos-anchor-placement="center buttom"
                >
                    Prism
                </h1>
                <p
                    data-aos="fade-down"
				    data-aos-duration="700"
					data-aos-delay="200"
					data-aos-once="true"
					data-aos-anchor-placement="center buttom"
                >
                    Аналітика ризиків за 15 напрямками
                </p>
            </div>
            <button onClick={onButtonClick} className={styles.intro__btn}>
                Напрямки та інструменти <br /> аналізу
                <ArrowRight className={styles.intro__arrowRight}/>
            </button>
        </div>
    )
}

export default IntroSection
