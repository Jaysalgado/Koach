import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../assets/Koachlogo.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <img className={styles.logo} src={logo} alt="none" />
        <a href="/" className={styles.link}>
          Home
        </a>
        <a href="/find-mentor" className={styles.link}>
          Find a Mentor
        </a>
        <a href="/become-mentor" className={styles.link}>
          Become a Mentor
        </a>
      </div>
      <div className={styles.rightSection}>
        <select className={styles.languageDropdown}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        <div className={styles.loginButton}>Login</div>
        <div className={styles.signupButton}>Sign Up</div>
      </div>
    </nav>
  );
};

export default Navbar;
