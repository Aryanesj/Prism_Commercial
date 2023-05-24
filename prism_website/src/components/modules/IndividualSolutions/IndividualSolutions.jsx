import React, { useState, useEffect } from 'react';
import { individualSolutionsData } from '../../data/IndividualSolutionsData'; 
import styles from './IndividualSolutions.module.scss'

const IndividualSolutions = () => {
    const [order, setOrder] = useState([0, 1, 2, 3, 4]);

    useEffect(() => {
        const checkWidth = () => {
            if (window.innerWidth <= 450) {
                setOrder([0, 1, 2, 4, 3]);
            } else {
                setOrder([0, 1, 2, 3, 4]);
            }
        }

        window.addEventListener('resize', checkWidth);
        checkWidth();

        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    return (
        <section className={styles.solutions_wrapper}>
            <div className={styles.solutions}>
                <div className={styles.solutions__container}>
                    <h1 className={styles.solutions__mainTitle}>Індивідуальні рішення</h1>
                    <p className={styles.solutions__mainText}> Можливість опрацювання індивідуальних запитів за 5<br /> напрямками</p>
                </div>
                <div className={styles.solutions__items}>
                    {order.map(index => {
                        const item = individualSolutionsData[index];
                        return (
                            <div key={index} className={styles.solutions__item}>
                                <div className={styles.solutions__top}>
                                    <img src={item.icon} alt={item.title} className={styles.solutions__icon} />
                                    <h3 className={styles.solutions__title}>{item.title}</h3>
                                </div>
                                <p className={styles.solutions__text}>{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default IndividualSolutions;
