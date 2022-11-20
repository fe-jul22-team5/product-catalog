import React from 'react';
import styles from '../HotPrices/HotPrices.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

export const HotPrices = React.memo(function HotPrices() {
  const navPrevButton = React.useRef<HTMLButtonElement>(null);
  const navNextButton = React.useRef<HTMLButtonElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      navigation.prevEl = navPrevButton.current;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      navigation.nextEl = navNextButton.current;
    }
  };

  return (
    <section className={styles.hotPrices}>
      <h1 className={styles.hotPrices__title}>
        Hot prices
      </h1>

      <div className={styles.hotPrices__wrapper}>
        <Swiper
          className={styles.hotPrices__swiper}
          onBeforeInit={onBeforeInit}
          modules={[Navigation]}
          slidesPerView={1.4}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          breakpoints={{
            767: {
              width: 767,
              slidesPerView: 2.5,
            },

            1023: {
              width: 1023,
              slidesPerView: 3.5,
            },
          }}
        >
          <SwiperSlide className={styles.hotPrices__swiperSlide}>
            <div className={styles.hotPrices__content}></div>
          </SwiperSlide>

          <SwiperSlide className={styles.hotPrices__swiperSlide}>
            <div className={styles.hotPrices__content}></div>
          </SwiperSlide>

          <SwiperSlide className={styles.hotPrices__swiperSlide}>
            <div className={styles.hotPrices__content}></div>
          </SwiperSlide>

          <SwiperSlide className={styles.hotPrices__swiperSlide}>
            <div className={styles.hotPrices__content}></div>
          </SwiperSlide>

          <button
            ref={navPrevButton}
            className={styles.hotPrices__prev_button}
          />
          <button
            ref={navNextButton}
            className={styles.hotPrices__next_button}
          />

        </Swiper>
      </div>
    </section>
  );
});