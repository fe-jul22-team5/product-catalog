import React from 'react';
import burgerStyles from './BurgerMenu.module.scss';
import styles from '../../components/Header/Header.module.scss';
import { NavLink } from 'react-router-dom';
import cart from '../../components/Header/logo/Shopping_cart.png';

export const BurgerMenu = React.memo(function BurgerMenu() {
  return (
    <>
      <nav className={burgerStyles.burger_nav}>
        <ul className={burgerStyles.burger_nav_list}>
          <li className={styles.header__menu_item}>
            <NavLink
              to="../"
              className={burgerStyles.burger_nav_link}
              end
            >
            Home
            </NavLink>
          </li>
          <li className={styles.header__menu_item}>
            <NavLink
              to="../phones"
              className={burgerStyles.burger_nav_link}
              end
            >
            Phones
            </NavLink>

          </li>
          <li className={styles.header__menu_item}>
            <NavLink
              to="../tablets"
              className={burgerStyles.burger_nav_link}
              end
            >
            Tablets
            </NavLink>
          </li>
          <li className={styles.header__menu_item}>
            <NavLink
              to="../accessories"
              className={burgerStyles.burger_nav_link}
              end
            >
            accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <footer className={burgerStyles.burger_footer}>
        <div className={burgerStyles.burger_footer_container}>
          <NavLink
            to='../cart'
            className={styles.header__cart_icon_link}
            end
          >
            <img src={cart} alt="shopping_cart_icon"/>
          </NavLink>
        </div>


      </footer>
    </>
  );
}
);
