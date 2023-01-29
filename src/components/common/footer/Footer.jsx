import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div
      className={`${styles.footer} border-top border-secondary text-center p-4`}
    >
      © 2023 Copyright:
      <a href='#' className={styles.web}>
        dev.com
      </a>
    </div>
  );
};

export default Footer;
