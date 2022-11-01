import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

import { LoginButton } from '../../buttons/login-button';
import { LogoutButton } from '../../buttons/logout-button';
import { SignupButton } from '../../buttons/signup-button';
import { NavbarButton } from '../../buttons/navbar-button';

export const NavBar: React.FC = () => {
  const auth = useAuth();
  return (
    <div className='nav-bar__container'>
      <nav className='nav-bar'>
        <div className='nav-bar__brand'>
          <NavLink to='/'>App Name Here</NavLink>
        </div>
        <div className='nav-bar__tabs'>
          <div className='nav-bar__tab'>
            <NavLink
              to='/profile'
              end
              className={({ isActive }) =>
                'nav-bar__tab ' + (isActive ? 'nav-bar__tab--active' : '')
              }
            >
              Profile
            </NavLink>
          </div>
          <div className='nav-bar__tab'>
            <NavLink
              to='/public'
              end
              className={({ isActive }) =>
                'nav-bar__tab ' + (isActive ? 'nav-bar__tab--active' : '')
              }
            >
              Public
            </NavLink>
          </div>
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
        <div className='nav-bar__hamburger'>
          <input id='menu-toggle' type='checkbox' />
          <label className='menu-button-container' htmlFor='menu-toggle'>
            <div className='menu-button'></div>
          </label>
          <ul className='menu'>
            {!auth.isAuthenticated && (
              <>
                <li>
                  <NavbarButton secondary text='Sign Up' authAction={auth.signinRedirect} />
                </li>
                <li>
                  <NavbarButton text='Login' authAction={auth.signinRedirect} />
                </li>
              </>
            )}
            {auth.isAuthenticated && (
              <li>
                <NavbarButton danger text='Log Out' authAction={auth.signoutRedirect} />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
