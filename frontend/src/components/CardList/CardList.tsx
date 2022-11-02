import React, { useCallback, useEffect, useState } from 'react';
import { getPhones } from '../../api/phone';
import { Card } from '../../components/Card';
import { Phone } from '../../types/phone';
import { Loader } from '../Loader';
import cardList from './CardList.module.scss';


function setToLocalStorage(
  key: string,
  setState: (value: React.SetStateAction<string[]>) => void
) {
  if (localStorage.getItem(key)) {
    setState(JSON.parse(localStorage.getItem(key) as string));
  } else {
    localStorage.setItem(key, JSON.stringify([]));
  }
}

export const CardList = React.memo(function CardList() {
  const [phoneList, setPhonesList] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cart, setCart] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setToLocalStorage('cart', setCart);
    setToLocalStorage('favorites', setFavorites);
  }, []);

  useEffect(() => {
    getPhones()
      .then(phones => setPhonesList(phones))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const addItemToCart = useCallback((id: string) => {
    let newCart = cart.filter(el => el !== id);
    if (newCart.length === cart.length) {
      newCart = [...newCart, id];
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, [cart]);

  const addItemToFavorites = useCallback((id: string) => {
    let newFavorites = favorites.filter(el => el !== id);
    if (newFavorites.length === favorites.length) {
      newFavorites = [...newFavorites, id];
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
