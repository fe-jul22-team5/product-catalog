import React from 'react';
import styles from './HomePageSlider.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { HomePageSlider } from '../../components/HomePageSlider/HomePageSlider';

SwiperCore.use([Autoplay]);


export const MainSlider = React.memo(function MainSlider() {

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
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false
        // }}
      >
        <SwiperSlide className={styles.mainSlider__swiperSlide}>
          <HomePageSlider/>
        </SwiperSlide>

        <SwiperSlide className={styles.mainSlider__swiperSlide}>
          <HomePageSlider/>
        </SwiperSlide>

        <SwiperSlide className={styles.mainSlider__content}>
          <HomePageSlider/>
        </SwiperSlide>

      </Swiper>
    </section>
  );
});
