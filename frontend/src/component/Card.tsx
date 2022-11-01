import React from 'react';
import iphone_1 from '../../img/iphone_1.png';
import './Card.scss';
import './Reset.css';

export const Card = React.memo(function Card() {

  return (
    <div className="phones-card">
      <img src={iphone_1} alt=""/>
      <h2 className="phones-card__name">
        Apple iPhone Xs 64GB Silver <br/>(iMT9G2FS/A)
      </h2>
      <div className="phones-card__prices">
        <span className="phones-card__price phones-card__price--newPrice">
          $799
        </span>
        <span className="phones-card__price phones-card__price--oldPrice">
          $899
        </span>
      </div>
      <ul className='phones-card__characteristic'>
        <li className="phones-card__characteristic-item">
          <span className="phones-card__characteristic-name">
            Screen
          </span>
          <span className="phones-card__characteristic-num">
            5.8” OLED
          </span>
        </li>
        <li className="phones-card__characteristic-item">
          <span className="phones-card__characteristic-name">
            Capacity
          </span>
          <span className="phones-card__characteristic-num">
            64 GB
          </span>
        </li>
        <li className="phones-card__characteristic-item">
          <span className="phones-card__characteristic-name">
            RAM
          </span>
          <span className="phones-card__characteristic-num">
            4 GB
          </span>
        </li>
      </ul>
      <div className="phones-card__btns">
        <button className="phones-card__addBtn">
          Add to cart
        </button>
        <button className="phones-card__favoritesBtn">
          <span className="phones-card__favoritesBtn-heart"></span>
        </button>
      </div>
    </div>
  );
});
