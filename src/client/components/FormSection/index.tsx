import React from 'react';
import styles from './FormSection.module.css';
import { StrokeDigit } from '../StrokeDigit';

export const FormSection: React.FC = () => {
    return (
        <>

            <div className={styles.formSection}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>Оставьте заявку у нас и вы получите:</h1>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <StrokeDigit digit={'01'} />
                            <div className={styles.featureText}>Предварительную стоимость ремонта</div>
                        </div>
                        <div className={styles.feature}>
                            <StrokeDigit digit={'02'} />
                            <div className={styles.featureText}>Возможность записи на ремонт в удобное время</div>
                        </div>
                        <div className={styles.feature}>
                            <StrokeDigit digit={'03'} />
                            <div className={styles.featureText}>Экономию времени и денег на поиск запчастей</div>
                        </div>
                    </div>
                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input type="text" className={styles.input} placeholder="Имя" />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" className={styles.input} placeholder="Телефон" />
                        </div>
                        <button type="submit" className={styles.button}>Оставить заявку</button>
                    </form>
                </div>
            </div>

        </>

    );
};
