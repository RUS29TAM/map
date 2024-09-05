import React from 'react';
import styles from './district.module.css'
import CardsGrid from "@/app/components/CardsGrid/CardsGrid";

const District = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Ленский район</h1>
            <CardsGrid />
        </div>
    );
};

export default District;
