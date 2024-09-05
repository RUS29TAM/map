import React, { useState } from 'react';
import styles from './cards-grid.module.css';
import { contentData } from '../../utils/contentData'; // Импортируем массив данных из другого файла

const CardsGrid: React.FC = () => {
    // Состояние для отслеживания активной карточки
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Обработчик клика по карточке
    const handleCardClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.cardsRow}>
                {contentData.slice(0, 4).map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            <div className={styles.cardsRow}>
                {contentData.slice(4, 8).map((item, index) => (
                    <div
                        key={index + 4} // Чтобы не пересекались ключи
                        className={`${styles.card} ${activeIndex === index + 4 ? styles.active : ''}`}
                        onClick={() => handleCardClick(index + 4)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            <div className={styles.contentRow}>
                {activeIndex !== null && (
                    <div className={styles.content}>
                        {/*<h2>{contentData[activeIndex].title}</h2>*/}
                        <p>{contentData[activeIndex].content}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardsGrid;
