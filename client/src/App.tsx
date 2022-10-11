import React from 'react';
import Example from './Example';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
