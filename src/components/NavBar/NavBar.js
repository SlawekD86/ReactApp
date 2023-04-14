import React from 'react';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const buttonActiveClass = (isActive) => (isActive && styles.linkActive).toString()

  return (
    <nav>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <div className={styles.navIcon}>
            <a href="/" className="fa fa-list"> </a>
          </div>
          <div className={styles.navList}>
            <ul>
              <li>
                <NavLink className={({ isActive }) => (buttonActiveClass(isActive))} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (buttonActiveClass(isActive))} to="/favorite">Favorites</NavLink>
                <NavLink className={({ isActive }) => (buttonActiveClass(isActive))} to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
