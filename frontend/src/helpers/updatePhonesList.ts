import { Phone } from '../types/phone';

export const updatePhonesList = (cart: Phone[], phone: Phone): Phone[] => {
  let newCart = cart.filter((el: Phone) => el.id !== phone.id);

  if (newCart.length === cart.length) {
    newCart = [...newCart, phone];
  }

  return newCart;
};
