import styles from './divideLine.module.css';
import React from 'react';

const DivideLine = ({title}) => {
    return(
        <div className={styles.divideLine}>
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default DivideLine;