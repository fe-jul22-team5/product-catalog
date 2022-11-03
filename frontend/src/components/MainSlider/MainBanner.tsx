import React from 'react';
import styles from '../../pages/Home_page/MainSlider.module.scss';

export const MainBanner = React.memo(function MainBanner() {
  return (
    <div className={styles.mainSlider__content}>
      <a className={styles.mainSlider__link} target="_blank" href="/">
        <div className={styles.mainSlider__img}></div>
      </a>
    </div>
  );
});
