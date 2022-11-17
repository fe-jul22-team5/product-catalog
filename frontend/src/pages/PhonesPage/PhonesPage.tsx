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

import ReactPaginate from 'react-paginate';
import classNames from 'classnames';
import { useParams } from 'react-router';

type Option = {
  value: string,
  label: string,
};

const defaultSortBy: Option = {
  value: SortTypes.alphabetically,
  label: 'Alphabetically'
};

const defaultCount: Option = {
  value: productCountOnPageTypes.sixteen,
  label: '16'
};

const firstPage = '0';

export const PhonesPage = React.memo(function PhonesPage() {

  const { phoneId = 0 } = useParams();

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
    {
      value: productCountOnPageTypes.all,
      label: 'all',
    },
    defaultCount,
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
    const sortBy = searchParams.get('sort') as SortTypes || undefined;

    return sortByOptions.find((option) => option.value === sortBy) || defaultSortBy;

  }, [searchParams]);

  const selectedItemsOnPage = useMemo(() => {
    const count = searchParams.get('count') as productCountOnPageTypes || undefined;

    return itemsOnPageOptions.find((option) => option.value === count) || defaultCount;

  }, [searchParams, phonesCount]);

  const countOfPages = useMemo(() => {
    const countOfItemsOnPage = selectedItemsOnPage.value;

    if (countOfItemsOnPage !== productCountOnPageTypes.all && Number.isInteger(Number(countOfItemsOnPage))) {
      return Math.ceil(phonesCount / Number(countOfItemsOnPage));
    }

    return 0;
  }, [selectedItemsOnPage, phonesCount]);

  const selectedPage = useMemo(() => {
    const page = searchParams.get('page');

    if (!Number.isInteger(Number(page))) {
      updateSearch({ page: undefined });

      return 0;
    } else if (Number(page) < 0) {
      updateSearch({ page: '0' });

      return 0;
    } else if (selectedItemsOnPage.value === productCountOnPageTypes.all || !page) {
      updateSearch({ page: undefined });
      return 0;
    } else if (Number(page) >= countOfPages && countOfPages !== 0) {
      updateSearch({ page: (countOfPages - 1).toString() });

      return countOfPages - 1;
    }

    updateSearch({ page: page });

    return Number(page);

  }, [searchParams, countOfPages]);

  useEffect(() => {
    getCountOfPhones()
      .then(({ count }) => setPhonesCount(count))
      .catch(() => setPhonesCount(-1));
  }, []);

  const phones = useMemo(() => {
    let sort = searchParams.get('sort') as SortTypes || SortTypes.alphabetically;
    const count = searchParams.get('count') || defaultCount.value;
    const page = selectedPage.toString();

    if (!Object.values(SortTypes).includes(sort)) {
      sort = defaultSortBy.value as SortTypes;
    }

    return getPhones(page, count, sort);

  }, [searchParams, selectedPage]);

  const handlePageChange = useCallback(({ selected }: { [key: string]: number }) => {
    updateSearch({ page: selected.toString() });
    window.scrollTo({ top: 0 });
  }, []);

  const handleChangeSortBy = useCallback(
    (newValue: SingleValue<Option>) => {
      updateSearch({
        sort: newValue?.value,
        page: undefined,
      });
    },
    [],
  );
  const handleChangeItemsOnPage = useCallback(
    (newValue: SingleValue<Option>) => {
      updateSearch({
        count: newValue?.value,
        page: newValue?.value === productCountOnPageTypes.all ? undefined : firstPage,
      });
    },
    [],
  );

  return (
    <>
      <div className={pageNav.navInfo}>
        <NavLink to="/" className={pageNav.navInfo__homeLink}>
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
          onChange={handleChangeSortBy}
          value={selectedSortBy}
          title={'Sort by'}
        />

        <CustomSelect
          options={itemsOnPageOptions}
          width={130}
          onChange={handleChangeItemsOnPage}
          value={selectedItemsOnPage}
          title={'Items on page'}
        />
      </div>

      <CardList
        data={phones}
      />

      {(selectedItemsOnPage.value !== productCountOnPageTypes.all)
        && <ReactPaginate
          onPageChange={handlePageChange}
          previousLabel="<"
          nextLabel=">"
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={countOfPages}
          forcePage={selectedPage}
          breakClassName={phonePage.break}
          containerClassName={phonePage.pagination}
          pageClassName={phonePage.pageItem}
          activeClassName={phonePage.active}
          previousClassName={classNames(
            phonePage.prevAndNext,
            { [phonePage.prevAndNext_disabled]: selectedPage === 0 }
          )}
          nextClassName={classNames(
            phonePage.prevAndNext,
            { [phonePage.prevAndNext_disabled]: selectedPage === countOfPages - 1 }
          )}
          pageLinkClassName={phonePage.pageLink}
          previousLinkClassName={phonePage.prevAndNextLink}
          nextLinkClassName={phonePage.prevAndNextLink}
        />
      }
    </>
  );
});
