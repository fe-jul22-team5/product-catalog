import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BASE_URL } from '../../api/fetchClient';
import { Phone } from '../../types/phone';
import card from './Card.module.scss';

type Props = {
  phone: Phone,
  addItemToCart: (phone: Phone) => void;
  addItemToFavorites: (phone: Phone) => void;
  cart: Phone[];
  favorites: Phone[];
}

export const Card = React.memo(function Card({
  phone,
  addItemToCart,
  cart,
  addItemToFavorites,
  favorites,
}: Props) {
  const [isAddedCart, setIsAddedCart] = useState(false);
  const [isAddedFav, setIsAddedFav] = useState(false);

  const {
    phoneId,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
    id,
  } = phone;


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart') as string);
    if (items.find((el: Phone) => el.phoneId === phoneId)) {
      setIsAddedCart(true);
    } else {
      setIsAddedCart(false);
    }
  }, [cart]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favorites') as string);
    if (items.find((el: Phone) => el.phoneId === phoneId)) {
      setIsAddedFav(true);
    } else {
      setIsAddedFav(false);
    }
  }, [favorites]);

  return (
    <div className={card.phones_card}>
      <NavLink
        to={`../phones/${id}`}
        className={card.phones_card__img_link}
        end
      >
        <img src={`${BASE_URL}/${image}`} alt={name} className={card.phones_card__img}/>
        <h2 className={card.phones_card__name}>
          {name}
          <br/>
         (iMT9G2FS/A)
        </h2>
      </NavLink>

      <div className={card.phones_card__prices}>
        <span className={card.phones_card__prices__newPrice}>
          {`$${price}`}
        </span>
        <span className={card.phones_card__prices__oldPrice}>
          {`$${fullPrice}`}
        </span>
      </div>
      <ul className={card.phones_card__characteristic}>
        <li className={card.phones_card__characteristic_item}>
          <span className={card.phones_card__characteristic_name}>
            Screen
          </span>
          <span className={card.phones_card__characteristic_num}>
            {screen}
          </span>
        </li>
        <li className={card.phones_card__characteristic_item}>
          <span className={card.phones_card__characteristic_name}>
            Capacity
          </span>
          <span className={card.phones_card__characteristic_num}>
            {capacity}
          </span>
        </li>
        <li className={card.phones_card__characteristic_item}>
          <span className={card.phones_card__characteristic_name}>
            RAM
          </span>
          <span className={card.phones_card__characteristic_num}>
            {ram}
          </span>
        </li>
      </ul>
      <div className={card.phones_card__btns}>
        <button
          className={classNames(
            card.phones_card__addBtn,
            { [card.phones_card__addBtn__active]: isAddedCart}
          )}
          onClick={() => addItemToCart(phone)}
        >
          {!isAddedCart ? 'Add to cart' : 'Added to cart'}
        </button>
        <button
          className={card.phones_card__favoritesBtn}
          onClick={() => addItemToFavorites(phone)}
        >
          <span
            className={classNames(
              card.phones_card__favoritesBtn_heart,
              { [card.phones_card__favoritesBtn_heart__active]: isAddedFav}
            )}
          ></span>
        </button>
      </div>
    </div>
  );
});
