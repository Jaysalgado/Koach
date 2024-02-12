import React from 'react';
import styles from './Features.module.scss';

function FeatureDisp({ blocks }) {
  return (
    <div className={styles.around}>
      {blocks.map((block, index) => (
        <div className={styles.together} key={index}>
          {index % 2 === 0 ? (
            <>
              <div className={styles.wordsL}>
                <h1>{block.heading}</h1>
                {Array.isArray(block.description) ? (
                  <ul>
                    {block.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.par}>{block.description}</p>
                )}
              </div>
              <img className={styles.imgR} src={block.img} alt="none" />
            </>
          ) : (
            <>
              <img className={styles.imgL} src={block.img} alt="none" />
              <div className={styles.wordsR}>
                <h1>{block.heading}</h1>
                {Array.isArray(block.description) ? (
                  <ul>
                    {block.description.map((desc, descIndex) => (
                      <li className={styles.list} key={descIndex}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.par}>{block.description}</p>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default FeatureDisp;
