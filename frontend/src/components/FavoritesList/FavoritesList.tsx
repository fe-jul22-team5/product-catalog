import React, { useCallback } from 'react';
import { Card } from '../Card';
import { Phone } from '../../types/phone';
import cardList from './FavoritesList.module.scss';
import { useLocalStorage } from '../../helpers/localStorage';
import { updatePhonesList } from '../../helpers/updatePhonesList';

type Props = {
  favorites: Phone[],
  setFavorites: (prev: Phone[]) => void;
}

export const FavoritesList = React.memo(function FavoritesList({
  favorites,
  setFavorites,
}: Props) {

  const [cart, setCart] = useLocalStorage<Phone[]>('cart', []);


  const addItemToCart = useCallback((phone: Phone) => {
    setCart((prev: Phone[]) => updatePhonesList(prev, phone));
  }, [cart]);

  const addItemToFavorites = useCallback((phone: Phone) => {
    setFavorites(updatePhonesList(favorites, phone));
  }, [favorites]);

  return (
    <>
      <div className={cardList.CardList}>
        {favorites.map((phone: Phone) => (
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
    </>
  );
});
