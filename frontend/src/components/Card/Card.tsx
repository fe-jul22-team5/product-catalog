import React from 'react';
import iphone_1 from '../../img/iphone_1.png';
import card from './Card.module.scss';

export const Card = React.memo(function Card() {

  return (
    <div className={card.phones_card}>
      <img src={iphone_1} alt="iphone 11" className={card.phones_card__img}/>
      <h2 className={card.phones_card__name}>
        Apple iPhone Xs 64GB Silver <br/>(iMT9G2FS/A)
      </h2>
      <div className={card.phones_card__prices}>
        <span className={card.phones_card__prices__newPrice}>
          $799
        </span>
        <span className={card.phones_card__prices__oldPrice}>
          $899
        </span>
      </div>
      <ul className={card.phones_card__characteristic}>
        <li className={card.phones_card__characteristic_item}>
          <span className={card.phones_card__characteristic_name}>
            Screen
          </span>
          <span className={card.phones_card__characteristic_num}>
            5.8” OLED
          </span>
        </li>
        <li className={card.phones_card__characteristic_item}>
          <span className={card.phones_card__characteristic_name}>
            Capacity
          </span>
          <span className={card.phones_card__characteristic_num}>
            64 GB
          </span>
        </li>
        <li className={card.phones_card__characteristic_item}>
          <span className={card.phones_card__characteristic_name}>
            RAM
          </span>
          <span className={card.phones_card__characteristic_num}>
            4 GB
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
