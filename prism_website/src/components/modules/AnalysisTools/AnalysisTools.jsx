import React from 'react'
import { ReactComponent as ArrowRight } from '../../../images/AnalysisTools/Icon.svg'
import { analysisToolsData } from '../../data/AnalysisToolsData'; 
import styles from './AnalysisTools.module.scss'

const AnalysisTools = ({ onButtonClick }) => {
    return (
        <section className={styles.tools}>
            <div className={styles.tools__container}>
                <h1>Доступний функціонал для фізичних та юридичних осіб</h1>
                <p className={styles.tools__p1}>Можливість опрацювання запитів у автоматичному та ручному режимі, за <span>16 напрямками.</span></p>
                <p className={styles.tools__p2}>А також, за необхідності, пропонуємо індивідуальні рішення
                    <button onClick={onButtonClick} className={styles.tools__arrowRightBtn}>
                        <ArrowRight className={styles.tools__arrowRight} />
                    </button>
                </p>
            </div>
            <div className={styles.tools__divMain}>
                <span className={styles.tools__div1}>для фізичних осіб</span>
                <span className={styles.tools__div2}>для юридичних осіб</span>
            </div>
            {analysisToolsData.map((item, index) => (
                <div key={index} className={styles.tools__item}>
                    <div className={styles.tools__itemHeader}>
                        <img src={item.icon} alt={item.title} className={styles.tools__icon} />
                        <h3 className={styles.tools__title}>{item.title}</h3>
                            <div className={styles.tools__acceptIcons}>
                                <img 
                                    src={item.acceptOne} 
                                    alt="accept" 
                                    className={`${styles.tools__acceptIconOne} ${[14, 15].includes(index) ? styles.hidden : ''}`} 
                                />
                                <img 
                                    src={item.acceptTwo} 
                                    alt="accept" 
                                    className={`${styles.tools__acceptIconTwo} ${index === 13 ? styles.hidden : ''}`} 
                                />
                            </div>
                    </div>
                    <p 
                        className={`${styles.tools__text} ${[13, 14].includes(index) ? styles.tools__text_extraMargin : ''} ${index === analysisToolsData.length - 1 ? styles.tools__text_last : ''}`}
                    >
                        {item.text}
                    </p>

                        <div className={styles.tools__secondaryMainDiv}>
                            {index === 13 && <span className={styles.tools__div3}>тільки для фізичних осіб</span>}
                            {([14].includes(index)) && <span className={styles.tools__div4}>тільки для юридичних осіб</span>}
                            {([15].includes(index)) && <span className={styles.tools__div5}>тільки для юридичних осіб</span>}
                        </div>
                </div>
            ))}
        </section>
    )
}

export default AnalysisTools
