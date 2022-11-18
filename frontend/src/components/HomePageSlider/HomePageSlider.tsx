import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../Home_page/HomePageSlider/HomePageSlider.module.scss';
import img1 from '../../Home_page/HomePageSlider/img/desctop-banner.svg';
import img2 from '../../Home_page/HomePageSlider/img/banner-new-phones.png';

export const HomePageSlider = React.memo(function HomePageSlider() {
  return (
    <>
      <NavLink to="/phones" className={styles.mainSlider__swiperSlide1}>
        <div className={styles.mainSlider__link}>
          <img className={styles.mainSlider__firstImg} src={img1} alt="" />
          {/* <div className={styles.mainSlider__firstImg}></div> */}
        </div>

        <div className={styles.mainSlider__link}>
          <img className={styles.mainSlider__secondImg} src={img2} alt="" />
          {/* <div className={styles.mainSlider__firstImg}></div> */}
        </div>
      </NavLink>
    </>
  );
});
