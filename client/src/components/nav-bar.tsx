import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from './button';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  // get user from session
  const user = JSON.parse(localStorage.getItem('user') || '');

  return (
    <div className='nav-bar-container'>
      <nav className='nav-bar'>
        <div className='nav-bar-brand'>
          <NavLink to='/'>Roleplayr</NavLink>
        </div>
        <div className='nav-bar-tabs'>
          {user && user.access_token && (
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
              <div className='nav-bar-tab'>
                <NavLink
                  to='/public'
                  end
                  className={({ isActive }) =>
                    'nav-bar-tab ' + (isActive ? 'nav-bar-tab--active' : '')
                  }
                >
                  Public
                </NavLink>
              </div>
            </>
          )}
        </div>
        <div className='nav-bar-buttons'>
          {!user && (
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
          {user && user.access_token && <Button size='sm' variant='tertiary' text='Log Out' />}
        </div>
        <div className='nav-bar-hamburger'>
          <input id='menu-toggle' type='checkbox' />
          <label className='menu-button-container' htmlFor='menu-toggle'>
            <div className='menu-button'></div>
          </label>
          <ul className='menu'>
            {!user && (
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
            {user && user.access_token && (
              <li>
                <Button size='sm' variant='tertiary' text='Log Out' navigation />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
