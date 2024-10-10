import React, { useState } from 'react';
import styles from './FormSection.module.css';
import { StrokeDigit } from '../StrokeDigit';
import Car from '../../../../assets/group-17.svg';

const initFormState = {
    name: '',
    phone: '',
}

export const FormSection: React.FC = () => {
    const [formState, setFormState] = useState(initFormState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: 'name' | 'phone') => {
        const value = e.target.value
        setFormState(prev => ({ ...prev, [key]: value }))
    }

    const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setFormState(initFormState)
    }

    return (
        <>
            <div className={styles.formSection}>
                <img src={Car} className={styles.carImg}/>
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
                            <input type="text" className={styles.input} placeholder="Имя" onChange={(event)=> handleChange(event, 'name')} value={formState.name}/>
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" className={styles.input} placeholder="Телефон" onChange={(event)=> handleChange(event, 'phone')} value={formState.phone}/>
                        </div>
                        <button type="submit" className={styles.button} onClick={handleSubmit}>Оставить заявку</button>
                    </form>
                </div>
            </div>
        </>

    );
};
