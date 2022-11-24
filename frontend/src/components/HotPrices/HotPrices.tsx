import React, { useCallback, useEffect, useState } from 'react';
import styles from '../HotPrices/HotPrices.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import useLocalStorage from '../../helpers/localStorage';
import { Phone } from '../../types/phone';
import { updatePhonesList } from '../../helpers/updatePhonesList';
import { getHotPrices } from '../../api/hotPrices';
import { Loader } from '../Loader';
import { Card } from '../Card';

export const HotPrices = React.memo(function HotPrices() {
  const [hotItems, setHotPhones] = useState<Phone[]>([]);
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
      navPrevButton.current?.classList.add(styles.hotPrices__btn_disabled);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      navigation.nextEl = navNextButton.current;
    }
  };

  const handleNavButtonsEnabling = useCallback((index: SwiperCore) => {
    if (index.snapIndex === 0) {
      navPrevButton.current?.classList.add(styles.hotPrices__btn_disabled);
    }
    else if (index.snapGrid.length === index.snapIndex + 1) {
      navNextButton.current?.classList.add(styles.hotPrices__btn_disabled);
    } else {
      navPrevButton.current?.classList.remove(styles.hotPrices__btn_disabled);
      navNextButton.current?.classList.remove(styles.hotPrices__btn_disabled);
    }
  }, [hotItems]);

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
            loop={false}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              490: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
            spaceBetween={16}
            onSlideChange={handleNavButtonsEnabling}
          >
            {hotItems.map(phone => (
              <SwiperSlide className={styles.hotPrices__swiperSlide} key={phone.id}>
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
          {hotItems.length === 0 && <h1>No items</h1>}
        </div>
      }

      {isError && <h1>Oooops! Something went wrong</h1>}
    </section>
  );
});
