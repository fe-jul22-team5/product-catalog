import React from 'react';
import { CategoriesHomePage } from '../../components/CategoriesHomePage/CategoriesHomePage';
import styles from '../../components/CategoriesHomePage/CategoriesHomePage.module.scss';


export const HomePageCategories = React.memo(function HomePageCategories() {
  return(
    <section className={styles.categories}>
      <h2 className={styles.categories__title}>
        Shop by category
      </h2>

      <ul className={styles.categories__content_list}>
        <CategoriesHomePage/>

        <CategoriesHomePage/>

        <CategoriesHomePage/>
      </ul>

    </section>
  );
});
