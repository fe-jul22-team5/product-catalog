import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartList } from '../../components/CartList';
import { Phone } from '../../types/phone';
import styles from './PageCart.module.scss';


function countSum(cart: Phone[]) {
  return cart.reduce((sum, el) => {
    if (!el.count) {
      el.count = 1;
    }
    return sum + el.count * el.price;
  },0);
}

function countItems(cart: Phone[]) {
  return cart.reduce((count, el) => {
    if (!el.count) {
      el.count = 1;
    }
    return count + el.count;
  },0);
}

export const PageCart = React.memo(function PageCart() {
  const [cart, setCart] = useState<Phone[]>([]);
  const [sum, setSum] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    const items = localStorage.getItem('cart');
    if (items) {
      const parsedCart = JSON.parse(items);
      setCart(parsedCart);
    }
  }, []);

  useEffect(() => {
    setSum(countSum(cart));
    setItemsCount(countItems(cart));
  }, [cart]);

  const history = useNavigate();

  const updateCart = useCallback((item: Phone, newCount: number, remove = false) => {
    setCart(prev => {
      let newCart = [...prev];
      console.log(cart);

      if (remove) {
        newCart = newCart.filter(el => el.id !== item.id);
      } else {
        const changedItemIndex = newCart.findIndex(el => el.id === item.id);

        if (changedItemIndex !== -1) {
          newCart[changedItemIndex].count = newCount;
        }
      }
      console.log(newCart);

      localStorage.setItem('cart', JSON.stringify(newCart));

      return newCart;
    });
  }, [cart]);

  console.log(cart);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__container}>
        <button
          className={styles.cart__backLink}
          onClick={() => history(-1)}
        >
          Back
        </button>

        <h2 className={styles.cart__title}>
          Cart
        </h2>

        <div className={styles.cart__content}>

          <CartList cart={cart} updateCart={updateCart} />

          <div className={styles.cart__finalSum}>
            <p className={styles.cart__sum}>{sum}</p>
            <p className={styles.cart__text}>{`Total for ${itemsCount} items`}</p>
            <button className={styles.cart__checkoutBtn}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
});
