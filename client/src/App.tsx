import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Profile } from './pages/profile';
import { Public } from './pages/public';
import { Callback } from './pages/callback';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/public' element={<Public />} />
        <Route path='/auth/callback' element={<Callback />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
