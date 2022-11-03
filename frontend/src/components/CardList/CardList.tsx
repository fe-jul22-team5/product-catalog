import React, { useCallback, useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Phone } from '../../types/phone';
import { Loader } from '../Loader';
import cardList from './CardList.module.scss';

import { createNotification, NotificationType } from '../../helpers/createNotification';
import { useLocalStorage } from '../../helpers/localStorage';

type Props = {
  data: Promise<Phone[]> | Phone[],
};

export const CardList = React.memo(function CardList(props: Props) {
  const { data } = props;

  const [phoneList, setPhonesList] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cart, setCart] = useLocalStorage('cart', []);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  useEffect(() => {
    if (data instanceof Promise<Phone[]>) {
      data.then(phones => setPhonesList(phones))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    } else {
      setPhonesList(data);
      setIsLoading(false);
    }
  }, [data]);

  const addItemToCart = useCallback((phone: Phone) => {
    let newCart = cart.filter((el: Phone) => el.id !== phone.id);
    if (newCart.length === cart.length) {
      newCart = [...newCart, phone];
      createNotification(NotificationType.addToCart, phone.name);
    } else {
      createNotification(NotificationType.removeFromCart, phone.name);
    }

    setCart(newCart);
  }, [cart]);

  const addItemToFavorites = useCallback((phone: Phone) => {
    let newFavorites = favorites.filter((el: Phone) => el.id !== phone.id);
    if (newFavorites.length === favorites.length) {
      newFavorites = [...newFavorites, phone];
      createNotification(NotificationType.AddToFav, phone.name);
    } else {
      createNotification(NotificationType.removeFromFav, phone.name);
    }

    setFavorites(newFavorites);
  }, [favorites]);

  return (
    <>
      {isLoading
        ? <Loader />
        : !isError
          ? (
            <div className={cardList.CardList}>
              {phoneList.map(phone => (
                <Card
                  key={phone.id}
                  phone={phone}
                  addItemToCart={addItemToCart}
                  addItemToFavorites={addItemToFavorites}
                  cart={cart}
                  favorites={favorites}
                />
              ))}
            </div>
          )
          : (
            <h1>Oooops! Something went wrong</h1>
          )
      }
    </>
  );
});
