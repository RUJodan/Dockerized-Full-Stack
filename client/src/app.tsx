import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// local imports
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Profile } from './pages/profile';
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
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
