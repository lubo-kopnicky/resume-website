import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/LandingPage.module.css'; // Import as a module

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}> {/* Use the imported style */}
      <header className={styles.landingHeader}>
        <h1>Welcome!</h1>
        <p>Explore the different sections of my website.</p>
      </header>
      <div className={styles.buttonContainer}>
        <Link to="/resume" className={`${styles.landingButton} ${styles.landingButton}`}> {/* Use template literals for multiple classes */}
          My Resume
        </Link>
        <Link to="/portfolio" className={`${styles.landingButton} ${styles.AboutMe}`}>
          My Portfolio
        </Link>
        <Link to="/contact" className={`${styles.landingButton} ${styles.AboutMe}`}>
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;