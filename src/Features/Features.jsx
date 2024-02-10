import React from 'react';
import styles from './Features.module.scss';
import FeatureDisp from './FeatureDisp';

function Features() {
  return (
    <div className={styles.featureBox}>
      <FeatureDisp />
    </div>
  );
}

export default Features;
