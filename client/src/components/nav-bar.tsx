import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';
import { Button } from './button';

export const NavBar: React.FC = () => {
  const auth = useAuth();
  return (
    <div className='nav-bar-container'>
      <nav className='nav-bar'>
        <div className='nav-bar-brand'>
          <NavLink to='/'>Roleplayr</NavLink>
        </div>
        <div className='nav-bar-tabs'>
          {auth.isAuthenticated && (
            <div className='nav-bar-tab'>
              <NavLink
                to='/profile'
                end
                className={({ isActive }) =>
                  'nav-bar-tab ' + (isActive ? 'nav-bar-tab--active' : '')
                }
              >
                Profile
              </NavLink>
            </div>
          )}
          <div className='nav-bar-tab'>
            <NavLink
              to='/public'
              end
              className={({ isActive }) => 'nav-bar-tab ' + (isActive ? 'nav-bar-tab--active' : '')}
            >
              Public
            </NavLink>
          </div>
        </div>
        <div className='nav-bar-buttons'>
          {!auth.isAuthenticated && (
            <>
              <Button size='sm' variant='secondary' onClick={auth.signinRedirect} text='Sign Up' />
              <Button size='sm' variant='primary' onClick={auth.signinRedirect} text='Log In' />
            </>
          )}
          {auth.isAuthenticated && (
            <Button size='sm' variant='tertiary' onClick={auth.signoutRedirect} text='Log Out' />
          )}
        </div>
        <div className='nav-bar-hamburger'>
          <input id='menu-toggle' type='checkbox' />
          <label className='menu-button-container' htmlFor='menu-toggle'>
            <div className='menu-button'></div>
          </label>
          <ul className='menu'>
            {!auth.isAuthenticated && (
              <>
                <li>
                  <Button
                    size='sm'
                    variant='primary'
                    onClick={auth.signinRedirect}
                    text='Sign Up'
                    navigation
                  />
                </li>
                <li>
                  <Button
                    size='sm'
                    variant='primary'
                    onClick={auth.signinRedirect}
                    text='Log In'
                    navigation
                  />
                </li>
              </>
            )}
            {auth.isAuthenticated && (
              <li>
                <Button
                  size='sm'
                  variant='tertiary'
                  onClick={auth.signoutRedirect}
                  text='Log Out'
                  navigation
                />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
