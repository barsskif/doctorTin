import React, { ChangeEvent, useState } from 'react';
import styles from './RequestForm.module.css';
import rectangle1 from '../../../../assets/rectangle-1.svg';
import rectangle2 from '../../../../assets/rectangle-2.svg';
import rectangle3 from '../../../../assets/rectangle-3.svg';
import rectangle4 from '../../../../assets/rectangle-4.svg';
import background from '../../../../assets/group.svg';
import phoneImage from '../../../../assets/i-phone-12-pro-1.svg';
import ellipse from '../../../../assets/ellipse-25.svg';

const initFormState = {
    name: '',
    phone: '',
  }
  

export const RequestForm: React.FC = () => {
    const [formState, setFormState] = useState(initFormState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>, key: 'name' | 'phone') => {
        const value = e.target.value
        setFormState(prev => ({ ...prev, [key]: value }))
    }
  
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setFormState(initFormState)
    }

    
    
    return (
        <>
        <div className={styles.app} style={{ backgroundImage: `url(${background})` }}>
            <img src={ellipse} className={styles.ellipse} alt="ellipse background" />
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Оценка стоимости ремонта по фото</h1>
                <p className={styles.description}>
                    Отправьте фото поврежденной детали нам через WhatsApp на номер или на
                    электронную почту <a href="mailto:D.Nesterov@mail.ru" className={styles.linkMail}>D.Nesterov@mail.ru</a> и наши мастера оценят примерную стоимость ремонта
                </p>
                <a className={styles.phoneNumber} href='tel:+79624400580'>+7 (962) 440-05-80</a>
            </div>
            <img src={phoneImage} className={styles.phoneImage} alt="Phone" />
            <div className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Имя</label>
                    <input 
                    type="text" 
                    className={styles.input} 
                    style={{ backgroundImage: `url(${rectangle1})` }} 
                    onChange={(event) => handleChange(event, 'name')} 
                    value={formState.name}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Телефон</label>
                    <input 
                    type="text" 
                    className={styles.input} 
                    style={{ backgroundImage: `url(${rectangle2})` }} 
                    onChange={(event) => handleChange(event, 'phone')} 
                    value={formState.phone}
                    />
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.button} style={{ backgroundImage: `url(${rectangle3})` }}>
                        Добавить фото
                    </button>
                    <button className={styles.button} style={{ backgroundImage: `url(${rectangle4})` }} onClick={handleSubmit}>
                        Оставить заявку
                    </button>
                </div>
            </div>
        </div>

</>

    );
};
