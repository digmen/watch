import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout';
import AllWatch from '../pages/allwatchpage/AllWatch';
import HomePage from '../pages/Home/HomePage';
import AuthPage from '../pages/auth/AuthPage';

function MainRouts() {
  return (
    <Routes>
      <Route element={<Mainlayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/allwatch" element={<AllWatch />} />
      </Route>
    </Routes>
  );
}

export default MainRouts;
