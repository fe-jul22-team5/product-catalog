import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import logo from './logo/full_logo.png';
import cart from './logo/Shopping_cart.png';
import burger from './logo/burger.png';
import favicon from './logo/fav_icon.png';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import styles from  './Header.module.scss';

export const Header = React.memo(function Header() {
  const [activeBurger, setActiveBurger] = useState(false);

  activeBurger
    ? disableBodyScroll(document.querySelector('body') as HTMLElement)
    : enableBodyScroll(document.querySelector('body') as HTMLElement);


  return (
    <div className={styles.header}>
      <div className={styles.header__logo_nav_block}>
        <div className={styles.header__logo}>
          <NavLink to="home">
            <img className='header__logo' src={logo} alt="full__logo" />
          </NavLink>
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

      <div className={styles.header_icons_container}>
        <div className={styles.header__cart_icon}>
          <NavLink
            to="favorites"
            className={({ isActive }) => classNames(
              styles.header__cart_icon_link,
              { [styles.header__menu_link_is_active]: isActive },
            )}
            end
          >
            <img src={favicon} alt="favourites_icon"/>
          </NavLink>
        </div>

        <div className={styles.header__cart_icon}>
          <NavLink
            to="cart"
            className={({ isActive }) => classNames(
              styles.header__cart_icon_link,
              { [styles.header__menu_link_is_active]: isActive },
            )}
            end
          >
            <img src={cart} alt="shopping_cart_icon"/>
          </NavLink>
        </div>
      </div>

      <div className={styles.header__burger_menu}
        onClick={() => setActiveBurger(!activeBurger)}
      >
        <img src={burger} className={styles.burger_header__icon} alt="burger-menu icon" />
      </div>

      <nav className={activeBurger ? styles.burger_open : styles.burger }>
        <div className={styles.burger_open_wrapper}>
          <div className={styles.burger_open_header}>
            <div className={styles.burger_header__logo}>
              <a href="/">
                <img className='header__logo' src={logo} alt="full__logo" />
              </a>
            </div>

            <div className={styles.header__burger_menu}
              onClick={() => {
                setActiveBurger(!activeBurger);
              } }
            >
              <p className={styles.burger_header__icon}> X </p>
            </div>
          </div>

          <ul className={styles.burger__menu_list}>
            <li className={styles.header__menu_item}>
              <NavLink
                onClick={() => setActiveBurger(!activeBurger)}
                to="/"
                className={({ isActive }) => classNames(
                  styles.burger__menu_link,
                  { [styles.header__menu_link_is_active]: isActive },
                )}
                end
              >
              Home
              </NavLink>
            </li>
            <li className={styles.header__menu_item}>
              <NavLink
                onClick={() => setActiveBurger(!activeBurger)}
                to="phones"
                className={({ isActive }) => classNames(
                  styles.burger__menu_link,
                  { [styles.header__menu_link_is_active]: isActive },
                )}
                end
              >
              Phones
              </NavLink>

            </li>
            <li className={styles.header__menu_item}>
              <NavLink
                onClick={() => setActiveBurger(!activeBurger)}
                to="tablets"
                className={({ isActive }) => classNames(
                  styles.burger__menu_link,
                  { [styles.header__menu_link_is_active]: isActive },
                )}
                end
              >
              Tablets
              </NavLink>
            </li>
            <li className={styles.header__menu_item}>
              <NavLink
                onClick={() => setActiveBurger(!activeBurger)}
                to="accessories"
                className={({ isActive }) => classNames(
                  styles.burger__menu_link,
                  { [styles.header__menu_link_is_active]: isActive },
                )}
                end
              >
              accessories
              </NavLink>
            </li>
          </ul>
        </div>


        <footer className={styles.burger__menu_footer}>
          <div className={styles.burger__menu_footer_pic}>
            <NavLink
              onClick={() => setActiveBurger(!activeBurger)}
              to="/favorites"
              className={styles.burger__cart_icon_link}
            >
              <img src={favicon} alt="facourite_icon"/>
            </NavLink>
          </div>

          <div className={styles.burger__menu_footer_pic}>
            <NavLink
              onClick={() => setActiveBurger(!activeBurger)}
              to="/cart"
              className={styles.burger__cart_icon_link}
            >
              <img src={cart} alt="shopping_cart_icon"/>

            </NavLink>
          </div>
        </footer>
      </nav>

    </div>

  );
});
