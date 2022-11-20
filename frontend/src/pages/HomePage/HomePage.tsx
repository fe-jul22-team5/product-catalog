import React from 'react';
import { HomePageCategories } from '../../components/HomePageCategories';
import { HomePageSlider } from '../../components/HomePageSlider';
import { HotPrices } from '../../components/HotPrices';

export const HomePage = React.memo(function HomePage() {
  return (
    <>
      <HomePageSlider />

      <HomePageCategories />

      <HotPrices />
    </>
  );
});
