import React, { useCallback, useEffect, useState } from 'react';
import styles from '../HotPrices/HotPrices.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import useLocalStorage from '../../helpers/localStorage';
import { Phone } from '../../types/phone';
import { updatePhonesList } from '../../helpers/updatePhonesList';
import { getHotPrices } from '../../api/hotPrices';
import { Loader } from '../Loader';
import { Card } from '../Card';

SwiperCore.use([Autoplay]);

export const HotPrices = React.memo(function HotPrices() {
  const [hotPhones, setHotPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cart, setCart] = useLocalStorage<Phone[]>('cart', []);
  const [favorites, setFavorites] = useLocalStorage<Phone[]>('favorites', []);
  const navPrevButton = React.useRef<HTMLButtonElement>(null);
  const navNextButton = React.useRef<HTMLButtonElement>(null);

  const addItemToCart = useCallback((phone: Phone) => {
    setCart((prev: Phone[]) => updatePhonesList(prev, phone));
  }, [cart]);

  const addItemToFavorites = useCallback((phone: Phone) => {
    setFavorites((prev: Phone[]) => updatePhonesList(prev, phone));
  }, [favorites]);

  useEffect(() => {
    getHotPrices('75')
      .then(phones => setHotPhones(phones))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

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

      {isLoading
        ? <Loader />
        :
        <div className={styles.hotPrices__wrapper}>
          <Swiper
            className={styles.hotPrices__swiper}
            onBeforeInit={onBeforeInit}
            modules={[Navigation]}
            slidesPerView={1.4}
            loop={false}
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
            {hotPhones.map(phone => (
              <SwiperSlide className={styles.hotPrices__swiperSlide} key={phone.id}>
                {/* <div className={styles.hotPrices__content}></div> */}
                <Card
                  phone={phone}
                  addItemToCart={addItemToCart}
                  addItemToFavorites={addItemToFavorites}
                  cart={cart}
                  favorites={favorites}
                />
              </SwiperSlide>
            ))}

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
      }

      {isError && <h1>Oooops! Something went wrong</h1>}
    </section>
  );
});
