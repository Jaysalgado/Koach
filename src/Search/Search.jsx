import React from 'react';
import styles from './Search.module.scss';
import Filter from './Filter';

function Search() {
  let filters = [
    'Product Designer',
    'Accountant',
    'Marketing',
    'Software Developer',
    'Data Analyst',
    'Project Manager',
    'Architect',
  ];

  return (
    <div className={styles.box}>
      <h1>Find the right Koach for you</h1>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search mentors" />
      </div>
      <Filter filters={filters} />
    </div>
  );
}

export default Search;
