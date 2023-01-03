import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useAuth } from 'react-oidc-context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// local imports
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Profile } from './pages/profile';
import { Public } from './pages/public';
import { Callback } from './pages/callback';
import 'react-toastify/dist/ReactToastify.css';

export const App: React.FC = () => {
  const auth = useAuth();

  React.useEffect(() => {
    // the `return` is important - addAccessTokenExpiring() returns a cleanup function
    return auth.events.addAccessTokenExpiring(() => {
      try {
        auth.startSilentRenew();
      } catch (error) {
        console.log(error);
      }
    });
  }, [auth.events, auth.signinSilent]);

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
        <Route path='/profile' element={<Profile />} />
        <Route path='/public' element={<Public />} />
        <Route path='/auth/callback' element={<Callback />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
