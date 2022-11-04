import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../Home_page/HomePageSlider/HomePageSlider.module.scss';

export const HomePageSlider = React.memo(function HomePageSlider() {
  return (
    <NavLink to="/phones" className={styles.mainSlider__content}>
      <div className={styles.mainSlider__link}>
        <div className={styles.mainSlider__img}></div>
      </div>
    </NavLink>
  );
});
