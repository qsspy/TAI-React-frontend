import React from 'react';
import styles from './Header.module.css';
import logo from './images/logo.png'

const Header = () => (
  <div>
    <img src={logo} className={styles.logo}></img>
  </div>
);

export default Header;
