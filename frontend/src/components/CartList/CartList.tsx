import React from 'react';
import { Phone } from '../../types/phone';
import { Cart } from '../Cart/Cart';
import cartList from './CartList.module.scss';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import '../../styles/TransitionGroup.scss';

type Props = {
  cart: Phone[];
  updateCart: (item: Phone, newCount: number, remove?: boolean) => void;
}

export const CartList = React.memo(function CartList({ cart, updateCart }: Props) {
  return (
    <TransitionGroup className={cartList.cart__list}>
      {cart.map(cartItem => (
        <CSSTransition
          key={cartItem.id}
          timeout={200}
          classNames="item"
        >
          <Cart  cartItem={cartItem} updateCart={updateCart} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
});
