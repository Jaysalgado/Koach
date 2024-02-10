import React from 'react';
import styles from './StudentPic.module.scss';
import photo from '../assets/StudentPic.png';

const StudentPic = () => {
  return (
    <div className={styles.imgBox}>
      <img className={styles.logo} src={photo} alt="none" />
    </div>
  );
};

export default StudentPic;
