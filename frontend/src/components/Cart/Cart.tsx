import classNames from 'classnames';
import React, { useCallback } from 'react';
import { BASE_URL } from '../../api/fetchClient';
import { Phone } from '../../types/phone';
import styles from './Cart.module.scss';

type Props = {
  cartItem: Phone;
  updateCart: (item: Phone, newCount: number, remove?: boolean) => void;
}

export const Cart = React.memo(function Cart({ cartItem, updateCart }: Props) {
  const {
    name,
    price,
    image,
  } = cartItem;

  let { count = 1 } = cartItem;

  const handlePlusButton = useCallback(() => {
    if (count < 10) {
      count++;
      updateCart(cartItem, count);
    }
  }, []);

  const handleMinusButton = useCallback(() => {
    if (count > 1) {
      count--;
      updateCart(cartItem, count);
    }
  }, []);

  const handleRemoveButton = useCallback(() => {
    updateCart(cartItem, count, true);
  }, []);
  return (
    <li className={styles.cart__item}>
      <button
        className={styles.cart__closeBtn}
        onClick={handleRemoveButton}
      ></button>
      <div className={styles.cart__img_container}>
        <img src={`${BASE_URL}/${image}`} alt="iphone 14 Pro" className={styles.cart__img}/>
      </div>
      <h3 className={styles.cart__name}>
        {name} (MQ023)
      </h3>
      <div className={styles.cart__counter}>
        <button
          className={classNames(
            styles.cart__removeBtn,
            {[styles.btn__disabled]: count === 1}
          )}
          onClick={handleMinusButton}
        ></button>
        <span className={styles.cart__productQuantity}>{count}</span>
        <button
          className={classNames(
            styles.cart__addBtn,
            {[styles.btn__disabled]: count === 10}
          )}
          onClick={handlePlusButton}
        ></button>
      </div>
      <span className={styles.cart__price}>
        {`$${price}`}
      </span>
    </li>
  );
});
