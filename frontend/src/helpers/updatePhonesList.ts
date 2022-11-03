import { Phone } from '../types/phone';
import { createNotification, NotificationType } from './createNotification';

export const updatePhonesList = (cart: Phone[], phone: Phone): Phone[] => {
  let newCart = cart.filter((el: Phone) => el.id !== phone.id);

  if (newCart.length === cart.length) {
    newCart = [...newCart, phone];
    createNotification(NotificationType.addToCart, phone.name);
  } else {
    createNotification(NotificationType.removeFromCart, phone.name);
  }

  return newCart;
};
