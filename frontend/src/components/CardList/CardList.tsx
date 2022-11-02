import React, { useEffect, useState } from 'react';
import { getPhones } from '../../api/phone';
import { Card } from '../../components/Card';
import { Phone } from '../../types/phone';
import { Loader } from '../Loader';
import cardList from './CardList.module.scss';

export const CardList = React.memo(function CardList() {
  const [phoneList, setPhonesList] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPhones()
      .then(phones => setPhonesList(phones))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading
        ? <Loader />
        : !isError
          ? (
            <div className={cardList.CardList}>
              {phoneList.map(phone => (
                <Card key={phone.id} phone={phone} />
              ))}
            </div>
          )
          : (
            <h1>Oooops! Something went wrong</h1>
          )
      }
    </>
  );
});
