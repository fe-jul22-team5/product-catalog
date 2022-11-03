import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageNotFound } from './pages/PageNotFound';
import { PhonesPage } from './pages/PhonesPage';
import { PageCart } from './pages/PageCart';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import app from './styles/App.module.scss';

export function App() {
  return (
    <div className={app.App}>

      <Header />

      <main className={app.page}>
        <div className={app.page__container}>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="home" element={<Navigate to="/" replace/>} />

            <Route path="phones" element={<PhonesPage />} />

            <Route path="cart" element={<PageCart />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>

        </div>
      </main>

      <Footer/>
    </div>
  );
}
