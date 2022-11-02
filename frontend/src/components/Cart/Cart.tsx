import React from 'react';
import styles from './Cart.module.scss';
import cartFirstPhoto from './img/cart-photo-1.png';


export const Cart = React.memo(function Cart() {
  return (
    <li className={styles.cart__item}>
      <button className={styles.cart__closeBtn}></button>
      <img src={cartFirstPhoto} alt="iphone 14 Pro" />
      <h3 className={styles.cart__name}>
      Apple iPhone 14 Pro 128GB Silver (MQ023)
      </h3>
      <div className={styles.cart__counter}>
        <button className={styles.cart__removeBtn}></button>
        <span className={styles.cart__productQuantity}>1</span>
        <button className={styles.cart__addBtn}></button>
      </div>
      <span className={styles.cart__price}>
      $999
      </span>
    </li>
  );
});
