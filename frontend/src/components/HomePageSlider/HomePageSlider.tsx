import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HomePageSlider.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';


SwiperCore.use([Autoplay]);


export const HomePageSlider = React.memo(function HomePageSlider() {

  return (
    <section className={styles.mainSlider}>
      <h1 className={styles.mainSlider__title}>
          Welcome to Nice Gadgets store!
      </h1>

      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        navigation
        loop={true}
        effect={'fade'}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide className={styles.mainSlider__swiperSlide}>
          <NavLink to="/phones" className={styles.mainSlider__swiperSlide1}>
            <div className={styles.mainSlider__link}>
              <div className={styles.mainSlider__firstImg}></div>
            </div>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide className={styles.mainSlider__swiperSlide}>
          <NavLink to="/phones" className={styles.mainSlider__swiperSlide}>
            <div className={styles.mainSlider__link}>
              <div className={styles.mainSlider__secondImg}></div>
            </div>
          </NavLink>
        </SwiperSlide>

      </Swiper>
    </section>
  );
});
