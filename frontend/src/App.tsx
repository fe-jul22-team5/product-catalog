import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from './pages/PageNotFound';
import { PhonesPage } from './pages/PhonesPage';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import app from './styles/App.module.scss';


export function App() {
  return (
    <div className='App'>

      <Header />

      <main className={app.page}>
        <div className={app.page__container}>
          <Routes>
            {/* <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} /> */}
            <Route path="phones" element={<PhonesPage />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>

          <Footer/>

          {/* ADD FOOTER COMPONENT HERE */}
        </div>
      </main>
    </div>
  );
}
