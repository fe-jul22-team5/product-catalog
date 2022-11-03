import React from 'react';
import { Phone } from '../../types/phone';
import { Cart } from '../Cart/Cart';
import cartList from './CartList.module.scss';

type Props = {
  cart: Phone[];
  updateCart: (item: Phone, newCount: number, remove?: boolean) => void;
}

export const CartList = React.memo(function CartList({ cart, updateCart }: Props) {
  return (
    <ul className={cartList.cart__list}>
      {cart.map(cartItem => (
        <Cart key={cartItem.id} cartItem={cartItem} updateCart={updateCart} />
      ))}
    </ul>
  );
});
