import React from 'react';
import styles from '../../Home_page/HomePageSlider/HomePageSlider.module.scss';

export const HomePageSlider = React.memo(function HomePageSlider() {
  return (
    <div className={styles.mainSlider__content}>
      <a className={styles.mainSlider__link} target="_blank" href="/">
        <div className={styles.mainSlider__img}></div>
      </a>
    </div>
  );
});
