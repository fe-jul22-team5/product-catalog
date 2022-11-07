import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageNotFound } from './pages/PageNotFound';
import { PhonesPage } from './pages/PhonesPage';
import { PageCart } from './pages/PageCart';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import app from './styles/App.module.scss';
import { NotificationContainer} from 'react-notifications';
import { PageFavorites } from './pages/PageFavorites';
import { MainSlider } from './Home_page/HomePageSlider';
import { PhoneItemPage } from './pages/PhoneItemPage';

export function App() {
  return (
    <div className={app.App}>

      <Header />
      <NotificationContainer />

      <main className={app.page}>
        <div className={app.page__container}>
          <Routes>
            <Route path="/" element={<MainSlider />} />

            <Route path="home" element={<Navigate to="/" replace/>} />

            <Route path="phones" element={<PhonesPage />} />

            <Route path="phones/1" element={<PhoneItemPage />} />

            <Route path="cart" element={<PageCart />} />

            <Route path="favourites" element={<PageFavorites />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
