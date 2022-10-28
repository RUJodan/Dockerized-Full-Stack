import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

import { LoginButton } from '../../buttons/login-button';
import { LogoutButton } from '../../buttons/logout-button';

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
          {!auth.isAuthenticated && <LoginButton />}
          {auth.isAuthenticated && <LogoutButton />}
        </div>
        <div className='nav-bar__hamburger'>
          <input id='menu-toggle' type='checkbox' />
          <label className='menu-button-container' htmlFor='menu-toggle'>
            <div className='menu-button'></div>
          </label>
          <ul className='menu'>
            <li>
              <NavLink
                to='/profile'
                end
                className={({ isActive }) =>
                  'nav-bar__tab ' + (isActive ? 'nav-bar__tab--active' : '')
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/public'
                end
                className={({ isActive }) =>
                  'nav-bar__tab ' + (isActive ? 'nav-bar__tab--active' : '')
                }
              >
                Public
              </NavLink>
            </li>
            {!auth.isAuthenticated && (
              <li>
                <LoginButton />
              </li>
            )}
            {auth.isAuthenticated && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
