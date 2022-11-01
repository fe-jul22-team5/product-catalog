import React from 'react';
import { Card } from '../../components/Card';
import cardList from './CardList.module.scss';

export const CardList = React.memo(function CardList() {
  return (
    <div className={cardList.CardList}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
});
