import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// local imports
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Profile } from './pages/profile';
import { Public } from './pages/public';
import { CreateAccount } from './pages/create-account';
import { SignIn } from './pages/sign-in';
import { ProtectedRoute } from './components/protected-route';

// style imports
import 'react-toastify/dist/ReactToastify.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/profile' element={<Profile />} />
        <Route
          path='/public'
          element={
            <ProtectedRoute>
              <Public />
            </ProtectedRoute>
          }
        />
        <Route path='/' element={<Public />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
