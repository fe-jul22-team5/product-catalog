import React from 'react';
import styles from './CategoriesHomePage.module.scss';
import mobilePhones from './img/mobile-phones.png';

export const CategoriesHomePage = React.memo(function CategoriesHomePage() {
  return(
    <li className={styles.categories__content_item}>
      <a href="/">
        <img src={mobilePhones} className={styles.categories__content_img} alt='Mobile phones category'></img>
      </a>
      <h3 className={styles.categories__content_title}>
            Mobile phones
      </h3>
      <p className={styles.categories__content_quantity}>
            95 models
      </p>
    </li>
  );
});
