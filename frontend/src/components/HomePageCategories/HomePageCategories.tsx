import React, { useEffect, useState } from 'react';
import { CategoriesHomePage } from '../../components/CategoriesHomePage/CategoriesHomePage';
import styles from '../../components/CategoriesHomePage/CategoriesHomePage.module.scss';
import mobilePhones from './img/mobile-phones.png';
import tablets from './img/tablets.jpg';
import accessories from './img/accessories.jpg';
import { getCountOfPhones } from '../../api/phone';


export const HomePageCategories = React.memo(function HomePageCategories() {
  const [phonesCount, setPhonesCount] = useState(-2);

  useEffect(() => {
    getCountOfPhones()
      .then(({ count }) => setPhonesCount(count))
      .catch(() => setPhonesCount(-1));
  }, []);

  return(
    <section className={styles.categories}>
      <h2 className={styles.categories__title}>
        Shop by category
      </h2>

      <ul className={styles.categories__content_list}>
        <CategoriesHomePage
          img={mobilePhones}
          title={'Mobile phones'}
          modelsCount={phonesCount}
          link={'phones'}
        />

        <CategoriesHomePage
          img={tablets}
          title={'Tablets'}
          modelsCount={0}
          link={'tablets'}
        />

        <CategoriesHomePage
          img={accessories}
          title={'Accessories'}
          modelsCount={0}
          link={'accessories'}
        />
      </ul>

    </section>
  );
});
