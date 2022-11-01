import React, { useCallback, useState } from 'react';
import phonePage from './PhonesPage.module.scss';
import home_icon from '../../img/icons/home-icon.svg';
import right_arrow_icon from '../../img/icons/right-arrow-icon.svg';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { CardList } from '../../components/CardList';
import { Loader } from '../../components/Loader';

export const PhonesPage = React.memo(function PhonesPage() {
  const [sortBy] = useState(['Newest', 'Alphabetically', 'Cheapest']);
  const [itemsOnPage] = useState(['16', '8', '4', 'all']);
  const [selectedSortBy, setSelectedSortBy] = useState(sortBy[0]);
  const [selectedItemsOnPage, setItemsOnPage] = useState(itemsOnPage[0]);

  const onChangeSortBy = useCallback(
    (option: string) => setSelectedSortBy(option),
    [],
  );

  const onChangeItemsOnPage = useCallback(
    (option: string) => setItemsOnPage((option)),
    [],
  );

  return (
    <>
      <main className={phonePage.page}>
        <div className={phonePage.page__container}>
          <div className={phonePage.navInfo}>
            <a href="#" className={phonePage.navInfo__homeLink}>
              <img src={home_icon} alt="Home" />
            </a>
            <img src={right_arrow_icon} alt="Arrow" className={phonePage.navInfo__arrow}/>
            <h4 className={phonePage.navInfo__title}>
              Phones
            </h4>
          </div>
          <h1 className={phonePage.page__title}>
            Mobile phones
          </h1>
          <p className={phonePage.page__modelsCount}>
            95 models
          </p>

          <div className={phonePage.filters}>
            <Dropdown
              options={sortBy}
              width={175}
              onChange={onChangeSortBy}
              value={selectedSortBy}
              title={'Sort by'}
            />

            <Dropdown
              options={itemsOnPage}
              width={130}
              onChange={onChangeItemsOnPage}
              value={selectedItemsOnPage}
              title={'Items on page'}
            />
          </div>

          <Loader />
          <CardList />
        </div>
      </main>
    </>
  );
});
