import classNames from 'classnames';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header.module.scss';


type Props = {
  to: string;
  text: string;
  func: () => void;
}

export const BurgerNavLink: FC<Props> = ({to, text, func}) => (
  <NavLink
    onClick={func}
    to={to}
    className={({ isActive }) => classNames(
      styles.burger__menu_link,
      { [styles.header__menu_link_is_active]: isActive },
    )}
    end
  >
    {text}
  </NavLink>
);
