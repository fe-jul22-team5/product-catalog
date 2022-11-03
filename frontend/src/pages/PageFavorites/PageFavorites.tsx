import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CardList } from '../../components/CardList';
import { setToLocalStorage, useLocalStorage } from '../../helpers/localStorage';
import home_icon from '../../img/icons/home-icon.svg';
import right_arrow_icon from '../../img/icons/right-arrow-icon.svg';
import { Phone } from '../../types/phone';
import pageNav from '../PageNav.module.scss';


export const PageFavorites = React.memo(function PageNotFound() {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  return (
    <>
      <div className={pageNav.navInfo}>
        <NavLink to="home" className={pageNav.navInfo__homeLink}>
          <img src={home_icon} alt="Home" />
        </NavLink>
        <img src={right_arrow_icon} alt="Arrow" className={pageNav.navInfo__arrow}/>
        <h4 className={pageNav.navInfo__title}>
          Favorites
        </h4>
      </div>
      <h1 className={pageNav.title}>
        Favorites
      </h1>
      <p className={pageNav.modelsCount}>
        {`${favorites.length} models`}
      </p>

      <CardList data={favorites} />
    </>
  );
});
