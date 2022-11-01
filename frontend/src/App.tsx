import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { PageNotFound } from './pages/PageNotFound';
// import { PhonesPage } from './pages/PhonesPage';
import {Card} from './component/Card';

export function App() {
  return (
    <div className='App'>

      {/* ADD HEADER COMPONENT HERE */}

      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} /> */}

        {/* <Route path="phones" element={<PhonesPage />} /> */}
        {/* <Route path="/" element={<PhonesPage />} /> */}

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>

      <Card />

      {/* ADD FOOTER COMPONENT HERE */}

    </div>
  );
}
