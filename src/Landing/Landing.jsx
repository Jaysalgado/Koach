import React from 'react';
import styles from './Landing.module.scss';

function Landing() {
  return (
    <div className={styles.body}>
      <h1>Empowering Connections and Accelerating Success</h1>
      <p>
        At Koach, our mission is clear: to establish flexible, independent, and
        sustainable connections between the world's vast knowledge and expertise
        resources. Join us on this journey as we empower individuals and
        organizations to thrive in the dynamic and collaborative workplace of
        tomorrow.
      </p>
      <div className={styles.start}>Get Started</div>
    </div>
  );
}

export default Landing;
