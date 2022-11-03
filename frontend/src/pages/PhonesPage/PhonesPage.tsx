import React, { useCallback, useEffect, useMemo, useState } from 'react';
import phonePage from './PhonesPage.module.scss';
import pageNav from '../PageNav.module.scss';
import home_icon from '../../img/icons/home-icon.svg';
import right_arrow_icon from '../../img/icons/right-arrow-icon.svg';
import { CardList } from '../../components/CardList';
import { getCountOfPhones, getPhones } from '../../api/phone';

import { SortTypes } from '../../types/sortTypes';
import { productCountOnPageTypes } from '../../types/productCountOnPageTypes';
import { CustomSelect } from '../../components/CustomSelect/CustomSelect';
import { SingleValue } from 'react-select/dist/declarations/src/types';

import { NavLink, useSearchParams } from 'react-router-dom';

type Option = {
  value: string,
  label: string,
};

const defaultSortBy: Option = {
  value: SortTypes.alphabetically,
  label: 'Alphabetically'
};

const defaultCount: Option = {
  value: productCountOnPageTypes.all,
  label: 'all'
};

export const PhonesPage = React.memo(function PhonesPage() {
  const sortByOptions = useMemo(() => [
    defaultSortBy,
    {
      value: SortTypes.cheap,
      label: 'Cheapest'
    },
    {
      value: SortTypes.novelty,
      label: 'Newest'
    },
  ] as Option[], []);

  const itemsOnPageOptions = useMemo(() => [
    defaultCount,
    {
      value: productCountOnPageTypes.sixteen,
      label: '16'
    },
    {
      value: productCountOnPageTypes.eight,
      label: '8'
    },
    {
      value: productCountOnPageTypes.four,
      label: '4'
    },
  ] as Option[], []);

  const [phonesCount, setPhonesCount] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  function updateSearch(params: { [key: string]: string | undefined }) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    });

    setSearchParams(searchParams);
  }

  const selectedSortBy = useMemo(() => {
    const sortBy = searchParams.get('sort') as SortTypes || SortTypes.alphabetically;

    return sortByOptions.find((option) => option.value === sortBy) || defaultSortBy;

  }, [searchParams]);

  const selectedItemsOnPage = useMemo(() => {
    const count = searchParams.get('count') as productCountOnPageTypes || productCountOnPageTypes.all;

    return sortByOptions.find((option) => option.value === count) || defaultCount;

  }, [searchParams]);

  useEffect(() => {
    getCountOfPhones()
      .then(({ count }) => setPhonesCount(count))
      .catch(() => setPhonesCount(-1));
  }, []);

  const phones = useMemo(() => {
    const sort  = searchParams.get('sort') as SortTypes || undefined;
    const from = searchParams.get('from') || undefined;
    const to = searchParams.get('to') || undefined;

    return getPhones(from, to, sort);

  }, [ searchParams ]);

  const onChangeSortBy = useCallback(
    (newValue: SingleValue<Option>) => {
      updateSearch({ sort: newValue?.value });
    },
    [],
  );
  const onChangeItemsOnPage = useCallback(
    (newValue: SingleValue<Option>) => {
      updateSearch({ count: newValue?.value });
    },
    [],
  );

  return (
    <>
      <div className={pageNav.navInfo}>
        <NavLink to="home" className={pageNav.navInfo__homeLink}>
          <img src={home_icon} alt="Home" />
        </NavLink>
        <img src={right_arrow_icon} alt="Arrow" className={pageNav.navInfo__arrow}/>
        <h4 className={pageNav.navInfo__title}>
            Phones
        </h4>
      </div>
      <h1 className={pageNav.title}>
          Mobile phones
      </h1>
      <p className={pageNav.modelsCount}>
        {`${phonesCount} models`}
      </p>

      <div className={phonePage.filters}>
        <CustomSelect
          options={sortByOptions}
          width={180}
          onChange={onChangeSortBy}
          value={selectedSortBy}
          title={'Sort by'}
        />

        <CustomSelect
          options={itemsOnPageOptions}
          width={130}
          onChange={onChangeItemsOnPage}
          value={selectedItemsOnPage}
          title={'Items on page'}
        />
      </div>

      <CardList
        data={phones}
      />
    </>
  );
});
