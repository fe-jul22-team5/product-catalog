import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import logo from './logo/full_logo.png';
import cart from './logo/Shopping_cart.png';
import burger from './logo/burger.png';

import styles from  './Header.module.scss';

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
            <li className={styles.header__menu_item}>
              <NavLink
                to="/"
                className={({ isActive }) => classNames(
                  styles.header__menu_link,
                  { [styles.header__menu_link_is_active]: isActive },
                )}
                end
              >
              Home
              </NavLink>
            </li>
            <li className={styles.header__menu_item}>
              <NavLink
                to="phones"
                className={({ isActive }) => classNames(
                  styles.header__menu_link,
                  { [styles.header__menu_link_is_active]: isActive },
                )}
                end
              >
              Phones
              </NavLink>

            </li>
            <li className={styles.header__menu_item}>
              <NavLink
                to="tablets"
                className={({ isActive }) => classNames(
                  styles.header__menu_link,
                  { [styles.header__menu_link_is_active]: isActive },
                )}
                end
              >
              Tablets
              </NavLink>
            </li>
            <li className={styles.header__menu_item}>
              <NavLink
                to="accessories"
                className={({ isActive }) => classNames(
                  styles.header__menu_link,
                  { [styles.header__menu_link_is_active]: isActive },
                )}
                end
              >
              accessories
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>


      <div className={styles.header__cart_icon}>
        <a href="/cart" className={styles.header__cart_icon_link}>
          <img src={cart} alt="shopping_cart_icon"/>
        </a>
      </div>

      <div className={styles.header__burger_menu}>
        <a href="/menu" className={styles.header__burger_menu_link}>
          <img src={burger} alt="burger-menu icon" />
        </a>
      </div>
    </div>

  );
});
