import React from 'react';
import styles from './Examples.module.css';

export const Examples: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    ПРИМЕРЫ НАШИХ РАБОТ
                </h1>
                <div className={styles.moreWorks}>
                    Больше наших работ
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.imagesWrapper}>
                    <div className={styles.imagesContainer}>
                        <img src="./assets/line-2.svg" alt="Line 2" className={styles.line2} />
                        <img src="./assets/line-1.svg" alt="Line 1" className={styles.line1} />
                    </div>

                    <div className={styles.imageSet}>
                        <img src="./assets/rectangle-6.svg" alt="Before" className={styles.imageBefore} />
                        <img src="./assets/rectangle-7.svg" alt="After" className={styles.imageAfter} />
                    </div>

                    <div className={styles.labelsContainer}>
                        <span className={styles.labelBefore}>До</span>
                        <span className={styles.labelAfter}>После</span>
                    </div>
                </div>

                <div className={styles.textContainer}>
                    <h2 className={styles.subtitle}>
                        Лучшая награда для нас — благодарность довольных клиентов
                    </h2>
                    <p className={styles.description}>
                        Полный перекрас vw passat 2012 года выпуска.
                        <br /><br />
                        С вышкуриванием лакокрасочного покрытия до металла. Вся ржавчина была удалена с а/м, проведена обработка антикоррозионным грунтом, все неровности на поверхности кузова устранены.
                        <br /><br />
                        Были использованы качественные материалы которые дают нам возможность дать 100℅ гарантию на наши работы!
                    </p>
                </div>
            </div>
        </div>
    );
};
