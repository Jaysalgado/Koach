import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import logo from '../assets/Koachlogo.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if window width is less than or equal to 800px
      setIsMobile(window.innerWidth <= 1000);
    };

    // Add event listener on mount
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <img className={styles.logo} src={logo} alt="Logo" />

        {isMobile && (
          <>
            <button className={styles.hamburger} onClick={handleMenuToggle}>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
            {menuOpen && (
              <div className={styles.mobileMenu}>
                <a
                  href="/"
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/find-mentor"
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Find a Mentor
                </a>
                <a
                  href="/become-mentor"
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Become a Mentor
                </a>
                <div
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </div>
                <div
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </div>
              </div>
            )}
          </>
        )}

        {!isMobile && (
          <>
            <a href="/" className={styles.link}>
              Home
            </a>
            <a href="/find-mentor" className={styles.link}>
              Find a Mentor
            </a>
            <a href="/become-mentor" className={styles.link}>
              Become a Mentor
            </a>
          </>
        )}
      </div>

      <div className={styles.rightSection}>
        <select className={styles.languageDropdown}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        {!isMobile && (
          <>
            <div className={styles.loginButton}>Login</div>
            <div className={styles.signupButton}>Sign Up</div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
