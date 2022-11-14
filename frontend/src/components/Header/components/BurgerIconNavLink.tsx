import classNames from 'classnames';
import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone } from '../../../types/phone';
import styles from '../Header.module.scss';

type Props = {
  to: string;
  content: ReactElement | null;
  func: () => void;
  storage: Phone[];
}

export const BurgerIconNavLink: FC<Props> = ({to, content, func, storage }) => (
  <NavLink
    onClick={func}
    to={to}
    className={({ isActive }) => classNames(
      styles.burger__cart_icon_link,
      { [styles.burger__cart_icon_link_is_active]: isActive },
    )}
    end
  >
    {content}
    <div
      className={
        storage.length > 0
          ?
          styles.burger_fav_counter_active
          :
          styles.burger_fav_counter
      }
    >
      {storage.length}
    </div>
  </NavLink>
);
