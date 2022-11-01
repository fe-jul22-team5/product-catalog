import React from 'react';
import { Card } from '../../components/Card';
import { Phone } from '../../types/phone';
import cardList from './CardList.module.scss';

type Props = {
  phoneList: Phone[],
}

export const CardList = React.memo(function CardList({
  phoneList,
}: Props) {

  return (
    <div className={cardList.CardList}>
      {phoneList.map(phone => (
        <Card key={phone.id} phone={phone} />
      ))}
    </div>

  );
});
