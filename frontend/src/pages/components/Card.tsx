import React from 'react';
import './Card.scss';
import iphone_1 from '../../img/iphone_1.png';

export const Card = React.memo(function Card() {
  return (
    <div className="phones__card">
      <img src={iphone_1} alt=""/>
      <h2 className="phones__card-name">
        Apple iPhone Xs 64GB Silver <br/>(iMT9G2FS/A)
      </h2>
      <p className="phones__card-price">
          $799
        <span className='phones__card-oldPrice'>
          $899
        </span>
      </p>
      <ul className='phones__card-characteristics'>
        <li>
          <span>Screen</span>
          <span>5.8” OLED</span>
        </li>
        <li>
          <span>Capacity</span>
          <span>64 GB</span>
        </li>
        <li>
          <span>RAM</span>
          <span>4 GB</span>
        </li>
      </ul>
      <div className="phones__card-btns">
        <button className='phones__card-addBtn'>
        Add to cart
        </button>
        <button className='phones__card-favoritesBtn'></button>
      </div>
    </div>
  );
});
