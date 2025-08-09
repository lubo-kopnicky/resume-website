import React from 'react';
import styles from './css/AboutMe.module.css'; // Import as a module

const AboutMe: React.FC = () => {
  return (
    <div className={styles.AboutMe}>
      <h1>🚧 Under Construction 🚧</h1>
      <p>This page is still a work in progress. Please check back later!</p>
      <p>In the meantime, feel free to visit the <a href="/">homepage</a>.</p>
    </div>
  );
};

export default AboutMe;