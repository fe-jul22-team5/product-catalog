import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from './pages/PageNotFound';
import { PhonesPage } from './pages/PhonesPage';
import { Header } from './components/Header';
import { BurgerMenu } from './pages/BurgerMenu';

export function App() {
  return (
    <div className='App'>

      <Header />

      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} /> */}

        <Route path="phones" element={<PhonesPage />} />

        <Route path="*" element={<PageNotFound />} />

        <Route path="burger" element={<BurgerMenu />} />
      </Routes>

      {/* ADD FOOTER COMPONENT HERE */}

    </div>
  );
}
