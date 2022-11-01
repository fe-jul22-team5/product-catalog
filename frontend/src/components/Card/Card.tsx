import React from 'react';
import { BASE_URL } from '../../api/fetchClient';
import { Phone } from '../../types/phone';
import card from './Card.module.scss';

type Props = {
  phone: Phone,
}

export const Card = React.memo(function Card({ phone }: Props) {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image
  } = phone;

  return (
    <div className={card.phones_card}>
      <img src={`${BASE_URL}/${image}`} alt={name} className={card.phones_card__img}/>
      <h2 className={card.phones_card__name}>
        {name}
        <br/>
         (iMT9G2FS/A)
      </h2>
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
        <button className={card.phones_card__addBtn}>
          Add to cart
        </button>
        <button className={card.phones_card__favoritesBtn}>
          <span className={card.phones_card__favoritesBtn_heart}></span>
        </button>
      </div>
    </div>
  );
});
