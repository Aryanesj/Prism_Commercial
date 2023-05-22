import React from 'react'
import { legalPersonsData } from '../../data/LegalPersonsData'
import { ReactComponent as ArrowRight } from '../../../images/LegalPersons/ArrowRight.svg'
import styles from './LegalPersons.module.scss'

const LegalPersons = () => {
    return (
        <section className={styles.legalPersons}>
            <div className={styles.container}>
                <h1 className={styles.legalPersons__headline}>Напрямки <br /> та інструменти аналізу</h1>
                    <div className={styles.legalPersons__cardsList}>
				        {legalPersonsData.map(({ number, title, text }, index) => (
					        <div className={styles.legalPersons__cardsItem} key={index}>
						        <div className={styles.legalPersons__detailsBlock}>
							        <span className={styles.legalPersons__cardNumber}>{number}</span>
							        <span className={styles.legalPersons__cardTitle}>{title}</span>
                                    <p className={styles.legalPersons__cardText}>{text}</p>
						        </div>
                                    <button className={styles.legalPersons__btn}>
                                        Детальніше
                                        <ArrowRight className={styles.legalPersons__arrowRight}/>
                                    </button>
					        </div>
				        ))}
			        </div>
            </div>
        </section>
    )
}

export default LegalPersons