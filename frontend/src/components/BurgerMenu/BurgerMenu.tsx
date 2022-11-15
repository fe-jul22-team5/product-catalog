import React from 'react';
import { BurgerIconNavLink } from './components/BurgerIconNavLink';
import { BurgerNavLink } from './components/BurgerNavLink';
import styles from './Burger.module.scss';
import headStyles from '../Header/Header.module.scss';
import logo from '../Header/logo/full_logo.png';
import favicon from '../Header/logo/fav_icon.png';
import cartLogo from '../Header/logo/Shopping_cart.png';
import { Phone } from '../../types/phone';


type Props = {
  activeBurger: boolean;
  handleBurgerActive: () => void;
  cart: Phone[];
  favorites: Phone[];
}

export const BurgerMenu = React.memo(function BurgerMenu({activeBurger, handleBurgerActive, cart, favorites}: Props) {
  return (
    <nav className={activeBurger ? styles.burger_open : styles.burger }>
      <div className={styles.burger_open_wrapper}>
        <div className={styles.burger_open_header}>
          <div className={styles.burger__header__logo}>
            <a href="/">
              <img
                className='header__logo'
                src={logo} alt="full__logo"
              />
            </a>
          </div>

          <div className={headStyles.header__burger_menu}
            onClick={handleBurgerActive}
          >
            <p className={styles.burger_header__icon}> X </p>
          </div>
        </div>

        <ul className={styles.burger__menu_list}>
          <li className={headStyles.header__menu_item}>
            <BurgerNavLink
              func={handleBurgerActive}
              to='/'
              text='Home'
            />
          </li>
          <li className={headStyles.header__menu_item}>
            <BurgerNavLink
              func={handleBurgerActive}
              to='phones'
              text='Phones'
            />
          </li>
          <li className={headStyles.header__menu_item}>
            <BurgerNavLink
              func={handleBurgerActive}
              to='tablets'
              text='Tablets'
            />
          </li>
          <li className={headStyles.header__menu_item}>
            <BurgerNavLink
              func={handleBurgerActive}
              to='accessories'
              text='accessories'
            />
          </li>
        </ul>
      </div>

      <footer className={styles.burger__menu_footer}>
        <div className={styles.burger__menu_footer_pic}>
          <BurgerIconNavLink
            to='favourites'
            func={handleBurgerActive}
            content={<img src={favicon} alt="favourite_icon"/>}
            storage={favorites}
          />
        </div>

        <div className={styles.burger__menu_footer_pic}>
          <BurgerIconNavLink
            to='cart'
            func={handleBurgerActive}
            content={(<img src={cartLogo} alt="shopping_cart_icon"/>)}
            storage={cart}
          />
        </div>
      </footer>
    </nav>
  );
});
