export enum NotificationType {
  addToCart,
  AddToFav,
  removeFromCart,
  removeFromFav,
  CheckoutSuccess,
  CheckoutFail,
}

import { NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const createNotification = (type: NotificationType, title?: string) => {
  switch (type) {
  case NotificationType.addToCart:
    NotificationManager.success(`${title} added to the cart`, '', 2000);
    break;
  case NotificationType.AddToFav:
    NotificationManager.success(`${title} added to the favourites`, '', 2000);
    break;
  case NotificationType.removeFromCart:
    NotificationManager.error(`${title} removed from cart`, '', 2000);
    break;
  case NotificationType.removeFromFav:
    NotificationManager.error(`${title} removed from favourites`, '', 2000);
    break;
  case NotificationType.CheckoutSuccess:
    NotificationManager.success('Thank you!', 'Purchase succeed!', 3000);
    break;
  case NotificationType.CheckoutFail:
    NotificationManager.warning('Please, first add something to the cart', '', 3000);
    break;
  default:
    break;
  }
};
