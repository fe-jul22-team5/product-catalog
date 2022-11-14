import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo/full_logo.png';
import cartLogo from './logo/Shopping_cart.png';
import burger from './logo/burger.png';
import favicon from './logo/fav_icon.png';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import styles from  './Header.module.scss';
import { useLocalStorage } from '../../helpers/localStorage';
import { Phone } from '../../types/phone';
import { PageNavLink } from './components/PageNavLink';
import { BurgerNavLink } from './components/BurgerNavLink';
import { IconNavLink } from './components/IconNavLink';
import { BurgerIconNavLink } from './components/BurgerIconNavLink';

export const Header = React.memo(function Header() {
  const [activeBurger, setActiveBurger] = useState(false);
  const [cart] = useLocalStorage<Phone[]>('cart', []);
  const [favorites] = useLocalStorage<Phone[]>('favorites', []);

  activeBurger
    ? disableBodyScroll(document.querySelector('body') as HTMLElement)
    : enableBodyScroll(document.querySelector('body') as HTMLElement);


  const handleBurgerActive = () => setActiveBurger(!activeBurger);

  return (
    <div className={styles.header}>
      <div className={styles.header__logo_nav_block}>
        <div className={styles.header__logo}>
          <NavLink to="home">
            <img
              className='header__logo'
              src={logo}
              alt="full__logo"
            />
          </NavLink>
        </div>

        <nav className={styles.header__menu}>
          <ul className={styles.header__menu_list}>
            <li className={styles.header__menu_item}>
              <PageNavLink to="/" text='Home'/>
            </li>
            <li className={styles.header__menu_item}>
              <PageNavLink to="phones" text='Phones'/>
            </li>
            <li className={styles.header__menu_item}>
              <PageNavLink to="tablets" text='Tablets'/>
            </li>
            <li className={styles.header__menu_item}>
              <PageNavLink to="accessories" text='accessories'/>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.header__icons_container}>
        <div className={styles.header__cart_icon}>
          <IconNavLink
            to='favourites'
            content={(<img src={favicon} alt="favourites_icon"/>)}
            counter={
              (<div className={
                favorites.length > 0
                  ?
                  styles.header__fav_counter_active
                  :
                  styles.header__fav_counter
              }>
                {favorites.length}
              </div>)
            }
          />
        </div>

        <div className={styles.header__cart_icon}>
          <IconNavLink
            to='cart'
            content={( <img src={cartLogo} alt="shopping_cart_icon"/>)}
            counter={
              (<div
                className={
                  cart.length > 0
                    ?
                    styles.header__cart_counter_active
                    :
                    styles.header__cart_counter
                }>
                {cart.length}
              </div>)
            }
          />
        </div>
      </div>

      <div className={styles.header__burger_menu}
        onClick={handleBurgerActive}
      >
        <img
          src={burger}
          className={styles.burger_header__icon}
          alt="burger-menu icon"
        />
      </div>

      <nav className={activeBurger ? styles.burger_open : styles.burger }>
        <div className={styles.burger_open_wrapper}>
          <div className={styles.burger_open_header}>
            <div className={styles.burger_header__logo}>
              <a href="/">
                <img
                  className='header__logo'
                  src={logo} alt="full__logo"
                />
              </a>
            </div>

            <div className={styles.header__burger_menu}
              onClick={handleBurgerActive}
            >
              <p className={styles.burger_header__icon}> X </p>
            </div>
          </div>

          <ul className={styles.burger__menu_list}>
            <li className={styles.header__menu_item}>
              <BurgerNavLink
                func={handleBurgerActive}
                to='/'
                text='Home'
              />
            </li>
            <li className={styles.header__menu_item}>
              <BurgerNavLink
                func={handleBurgerActive}
                to='phones'
                text='Phones'
              />
            </li>
            <li className={styles.header__menu_item}>
              <BurgerNavLink
                func={handleBurgerActive}
                to='tablets'
                text='Tablets'
              />
            </li>
            <li className={styles.header__menu_item}>
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
    </div>
  );
});
