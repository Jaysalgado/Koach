import React from 'react';
import styles from './Search.module.scss';

function Filter({ filters }) {
  return (
    <div className={styles.filter}>
      {filters.map((item, index) => (
        <div className={styles.butn} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Filter;
