import React from 'react';
import styles from './RequestForm.module.css';
import rectangle1 from '../../../../assets/rectangle-1.svg';
import rectangle2 from '../../../../assets/rectangle-2.svg';
import rectangle3 from '../../../../assets/rectangle-3.svg';
import rectangle4 from '../../../../assets/rectangle-4.svg';
import background from '../../../../assets/group.svg';
import phoneImage from '../../../../assets/i-phone-12-pro-1.svg';
import ellipse from '../../../../assets/ellipse-25.svg';

export const RequestForm: React.FC = () => {
    return (
        <>
        <div className={styles.app} style={{ backgroundImage: `url(${background})` }}>
            <img src={ellipse} className={styles.ellipse} alt="ellipse background" />
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Оценка стоимости ремонта по фото</h1>
                <p className={styles.description}>
                    Отправьте фото поврежденной детали нам через Viber и WhatsApp на номер или на
                    электронную почту info@kuz-nn.ru и наши мастера оценят примерную стоимость ремонта
                </p>
                <p className={styles.phoneNumber}>8(908)1638144</p>
            </div>
            <img src={phoneImage} className={styles.phoneImage} alt="Phone" />
            <div className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Имя</label>
                    <input type="text" className={styles.input} style={{ backgroundImage: `url(${rectangle1})` }} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Телефон</label>
                    <input type="text" className={styles.input} style={{ backgroundImage: `url(${rectangle2})` }} />
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.button} style={{ backgroundImage: `url(${rectangle3})` }}>
                        Добавить фото
                    </button>
                    <button className={styles.button} style={{ backgroundImage: `url(${rectangle4})` }}>
                        Оставить заявку
                    </button>
                </div>
            </div>
        </div>

</>

    );
};
