import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

import { LoginButton } from '../../buttons/login-button';
import { LogoutButton } from '../../buttons/logout-button';
import { SignupButton } from '../../buttons/signup-button';

export const NavBar: React.FC = () => {
  const auth = useAuth();
  return (
    <div className='nav-bar__container'>
      <nav className='nav-bar'>
        <div className='nav-bar__brand'>
          <NavLink to='/'>App Name Here</NavLink>
        </div>
        <div className='nav-bar__tabs'>
          <NavLink
            to='/profile'
            end
            className={({ isActive }) => 'nav-bar__tab ' + (isActive ? 'nav-bar__tab--active' : '')}
          >
            Profile
          </NavLink>
          <NavLink
            to='/public'
            end
            className={({ isActive }) => 'nav-bar__tab ' + (isActive ? 'nav-bar__tab--active' : '')}
          >
            Public
          </NavLink>
        </div>
        <div className='nav-bar__buttons'>
          {!auth.isAuthenticated && (
            <>
              <SignupButton />
              <LoginButton />
            </>
          )}
          {auth.isAuthenticated && <LogoutButton />}
        </div>
      </nav>
    </div>
  );
};
