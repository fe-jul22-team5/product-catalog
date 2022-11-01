import React from 'react';
import cartFirstPhoto from './img/cart-photo-1.png';
import cartSecondPhoto from './img/cart-photo-2.png';
import cartThirdPhoto from './img/cart-photo-3.png';
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

            <li className={styles.cart__item}>
              <button className={styles.cart__closeBtn}></button>
              <img src={cartSecondPhoto} alt="iphone 14 Plus" />
              <h3 className={styles.cart__name}>
                Apple iPhone 14 Plus 128GB PRODUCT Red <br/>(MQ513)
              </h3>
              <div className={styles.cart__counter}>
                <button className={styles.cart__removeBtn}></button>
                <span className={styles.cart__productQuantity}>1</span>
                <button className={styles.cart__addBtn}></button>
              </div>
              <span className={styles.cart__price}>
                $859
              </span>
            </li>

            <li className={styles.cart__item}>
              <button className={styles.cart__closeBtn}></button>
              <img src={cartThirdPhoto} alt="iphone 11 Pro" />
              <h3 className={styles.cart__name}>
                Apple iPhone 11 Pro Max 64GB Gold <br/>(iMT9G2FS/A)
              </h3>
              <div className={styles.cart__counter}>
                <button className={styles.cart__removeBtn}></button>
                <span className={styles.cart__productQuantity}>1</span>
                <button className={styles.cart__addBtn}></button>
              </div>
              <span className={styles.cart__price}>
                $799
              </span>
            </li>
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
