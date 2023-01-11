import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// components
import { Button } from './button';

// hooks
import useSession from '../hooks/useSession';
import { logoutUserAccount } from '../services/logout-user-account';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  // get user from session
  const { session, deleteSession } = useSession();

  return (
    <div className='nav-bar-container'>
      <nav className='nav-bar'>
        <div className='nav-bar-brand'>
          <NavLink to='/'>Roleplayr</NavLink>
        </div>
        <div className='nav-bar-tabs'>
          {session && session.access_token && (
            <>
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
            </>
          )}
        </div>
        <div className='nav-bar-buttons'>
          {!session && (
            <>
              <Button
                size='sm'
                variant='secondary'
                onClick={() => navigate('/create-account')}
                text='Sign Up'
              />
              <Button
                size='sm'
                variant='primary'
                onClick={() => navigate('/login')}
                text='Sign In'
              />
            </>
          )}
          {session && session.access_token && (
            <Button
              size='sm'
              variant='tertiary'
              text='Log Out'
              onClick={async () => {
                const response = await logoutUserAccount();
                if (response && response.data?.success) {
                  deleteSession();
                  navigate('/login');
                }
              }}
            />
          )}
        </div>
        <div className='nav-bar-hamburger'>
          <input id='menu-toggle' type='checkbox' />
          <label className='menu-button-container' htmlFor='menu-toggle'>
            <div className='menu-button'></div>
          </label>
          <ul className='menu'>
            {!session && (
              <>
                <li>
                  <Button
                    size='sm'
                    variant='primary'
                    onClick={() => navigate('/create-account')}
                    text='Sign Up'
                    navigation
                  />
                </li>
                <li>
                  <Button
                    size='sm'
                    variant='primary'
                    onClick={() => navigate('/login')}
                    text='Log In'
                    navigation
                  />
                </li>
              </>
            )}
            {session && session.access_token && (
              <li>
                <Button
                  size='sm'
                  variant='tertiary'
                  text='Log Out'
                  navigation
                  onClick={async () => {
                    const response = await logoutUserAccount();
                    if (response && response.data?.success) {
                      deleteSession();
                      navigate('/login');
                    }
                  }}
                />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
