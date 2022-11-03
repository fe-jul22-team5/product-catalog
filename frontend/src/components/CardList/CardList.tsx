import React, { useCallback, useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Phone } from '../../types/phone';
import { Loader } from '../Loader';
import cardList from './CardList.module.scss';

import { createNotification, NotificationType } from '../../helpers/createNotification';

type Props = {
  data: Promise<Phone[]> | Phone[],
};

function setToLocalStorage(
  key: string,
  setState: (value: React.SetStateAction<Phone[]>) => void
) {
  if (localStorage.getItem(key)) {
    setState(JSON.parse(localStorage.getItem(key) as string));
  } else {
    localStorage.setItem(key, JSON.stringify([]));
  }
}

export const CardList = React.memo(function CardList(props: Props) {
  const { data } = props;

  const [phoneList, setPhonesList] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cart, setCart] = useState<Phone[]>([]);
  const [favorites, setFavorites] = useState<Phone[]>([]);
  // const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setToLocalStorage('cart', setCart);
    setToLocalStorage('favorites', setFavorites);
  }, []);

  useEffect(() => {
    // setSearchParams({sort: 'cheap', from: '1', to: '10'});
    // const sort  = searchParams.get('sort') as SortTypes || undefined;
    // const from = searchParams.get('from') || undefined;
    // const to = searchParams.get('to') || undefined;

    if (data instanceof Promise<Phone[]>) {
      data.then(phones => setPhonesList(phones))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    } else {
      setPhonesList(data);
      setIsLoading(false);
    }
  }, []);

  const addItemToCart = useCallback((phone: Phone) => {
    let newCart = cart.filter(el => el.id !== phone.id);
    if (newCart.length === cart.length) {
      newCart = [...newCart, phone];
      createNotification(NotificationType.addToCart, phone.name);
    } else {
      createNotification(NotificationType.removeFromCart, phone.name);
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, [cart]);

  const addItemToFavorites = useCallback((phone: Phone) => {
    let newFavorites = favorites.filter(el => el.id !== phone.id);
    if (newFavorites.length === favorites.length) {
      newFavorites = [...newFavorites, phone];
      createNotification(NotificationType.AddToFav, phone.name);
    } else {
      createNotification(NotificationType.removeFromFav, phone.name);
    }

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
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
