import classNames from 'classnames';
import React, { ReactElement, FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header.module.scss';

type Props = {
  to: string;
  content: ReactElement | null;
  counter: ReactElement | null;
}

export const IconNavLink: FC<Props> = ({to, content, counter}) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      styles.header__cart_icon_link,
      { [styles.header__menu_link_is_active]: isActive },
    )}
    end
  >
    {content}
    {counter}
  </NavLink>
);
