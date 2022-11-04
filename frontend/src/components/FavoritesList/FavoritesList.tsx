import React, { useCallback } from 'react';
import { Card } from '../Card';
import { Phone } from '../../types/phone';
import cardList from './FavoritesList.module.scss';
import { useLocalStorage } from '../../helpers/localStorage';
import { updatePhonesList } from '../../helpers/updatePhonesList';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import '../../styles/TransitionGroup.scss';

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
      <TransitionGroup className={cardList.CardList}>
        {favorites.map((phone: Phone) => (
          <CSSTransition
            key={phone.id}
            timeout={200}
            classNames="item"
          >
            <Card
              phone={phone}
              addItemToCart={addItemToCart}
              addItemToFavorites={addItemToFavorites}
              cart={cart}
              favorites={favorites}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
});
