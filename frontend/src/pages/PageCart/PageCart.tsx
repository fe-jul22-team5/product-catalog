import React from 'react';
import { Cart } from '../../components/Cart/Cart';
import styles from './PageCart.module.scss';

export const PageCart = React.memo(function PageCart() {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__container}>
        <a className={styles.cart__backLink} href="/">
          Back
        </a>

        <h2 className={styles.cart__title}>
          Cart
        </h2>

        <div className={styles.cart__content}>
          <ul className={styles.cart__list}>
            <Cart />

            <Cart />

            <Cart />
          </ul>

          <div className={styles.cart__finalSum}>
            <p className={styles.cart__sum}>$2657</p>
            <p className={styles.cart__text}>Total for 3 items</p>
            <button className={styles.cart__checkoutBtn}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
});
