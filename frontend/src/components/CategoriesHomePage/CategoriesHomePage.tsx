import React from 'react';
import { NavLink } from 'react-router-dom';
import { Loader } from '../Loader';
import styles from './CategoriesHomePage.module.scss';

type Props = {
  img: string,
  title: string,
  modelsCount: number,
  link: string,
}

export const CategoriesHomePage: React.FC<Props> = React.memo(function CategoriesHomePage({
  img,
  title,
  modelsCount,
  link
}: Props) {
  return(
    <li className={styles.categories__content_item}>
      <NavLink to={link} className={styles.categories__content_link} >
        <img src={img} className={styles.categories__content_img} alt='Mobile phones category'></img>
      </NavLink>
      <h3 className={styles.categories__content_title}>
        {title}
      </h3>
      <p className={styles.categories__content_quantity}>
        {modelsCount === -2 ?
          <Loader height='30' width='30' wrapperStyle={{ 'justifyContent': 'left' }} />
          : `${modelsCount} models`
        }
      </p>
    </li>
  );
});
