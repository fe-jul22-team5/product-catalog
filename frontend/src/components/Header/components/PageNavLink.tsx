import classNames from 'classnames';
import  React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header.module.scss';

type Props = {
  to: string;
  text: string;
}


export const PageNavLink: FC<Props> = ({to, text}) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      styles.header__menu_link,
      { [styles.header__menu_link_is_active]: isActive },
    )}
    end
  >
    {text}
  </NavLink>
);
