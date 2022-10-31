import React from 'react';
import logo from './logo/full_logo.png';
import cart from './logo/Shopping_cart.png';
import burger from './logo/burger.png';
import './fonts/Mont-Bold.otf';

import styles from '../Header/header.module.scss';

export const Header = React.memo(function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo_nav_block}>
        <div className={styles.header__logo}>
          <a href="/">
            <img className='header__logo' src={logo} alt="full__logo" />
          </a>
        </div>

        <nav className={styles.header__menu}>
          <ul className={styles.header__menu_list}>
            <li className=''>
              <a href="/" className={styles.header__menu_link}>
              Home
              </a>
            </li>
            <li className='Header-menu-item'>
              <a href="/phones" className={styles.header__menu_link}>
              Phones
              </a>
            </li>
            <li className='Header-menu-item'>
              <a href="/tablets" className={styles.header__menu_link}>
              Tablets
              </a>
            </li>
            <li className='Header-menu-item'>
              <a href="/accessories" className={styles.header__menu_link}>
              accessories
              </a>
            </li>
          </ul>
        </nav>
      </div>


      <div className={styles.header__cart_icon}>
        <a href="">
          <img src={cart} alt="shopping_cart_icon" />
        </a>
      </div>

      <div className={styles.header__burger_menu}>
        <img src={burger} alt="burger-menu icon" />
      </div>
    </div>
  );
});
