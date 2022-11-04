import React from 'react';
import { NavLink } from 'react-router-dom';
import { FavoritesList } from '../../components/FavoritesList';
import { useLocalStorage } from '../../helpers/localStorage';
import home_icon from '../../img/icons/home-icon.svg';
import right_arrow_icon from '../../img/icons/right-arrow-icon.svg';
import { Phone } from '../../types/phone';
import pageNav from '../PageNav.module.scss';


export const PageFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage<Phone[]>('favorites', []);

  return (
    <>
      <div className={pageNav.navInfo}>
        <NavLink to="/" className={pageNav.navInfo__homeLink}>
          <img src={home_icon} alt="Home" />
        </NavLink>
        <img src={right_arrow_icon} alt="Arrow" className={pageNav.navInfo__arrow}/>
        <h4 className={pageNav.navInfo__title}>
        Favourites
        </h4>
      </div>
      <h1 className={pageNav.title}>
        Favourites
      </h1>
      <p className={pageNav.modelsCount}>
        {`${favorites.length} models`}
      </p>

      <FavoritesList favorites={favorites} setFavorites={setFavorites} />
    </>
  );
};
