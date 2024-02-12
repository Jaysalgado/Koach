import React from 'react';
import styles from './Features.module.scss';
import FeatureDisp from './FeatureDisp';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';
import photo4 from '../assets/photo4.png';

function Features() {
  const blocks = [
    {
      heading: 'World-class coaching & mentorship',
      description:
        "Drive performance through 1-on-1 and group coaching with functional experts who work at the world's top companies.",
      img: photo1,
    },
    {
      heading: 'Tools to unlock growth',
      description:
        "Supporting and promoting each person's unique goals and challenges through technology and software.",
      img: photo2,
    },
    {
      heading: 'Community of top performers',
      description:
        'Bi-weekly community events and workshops with functional experts and coaches promote growth in collaborative settings.',
      img: photo3,
    },
    {
      heading: 'Your Koach',
      description: [
        'is a skilled mentor listens to you without bias',
        'provides fresh insights and ideas',
        'collaborates with you on your career journey',
        'offers unwavering support',
      ],
      img: photo4,
    },
  ];

  return (
    <div className={styles.featureBox}>
      <h2>Unlocking the Future of Talent</h2>
      <FeatureDisp blocks={blocks} />
    </div>
  );
}

export default Features;
