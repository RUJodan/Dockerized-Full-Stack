import React from 'react';
import cx from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faHome,
  faLock,
  faChartLine,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export const MobileNavBar: React.FC = () => {
  const location = useLocation();
  const navItems: Record<string, string | number | IconDefinition>[] = [
    {
      id: 0,
      route: '/profile',
      label: 'Profile',
      icon: faUser,
    },
    {
      id: 1,
      route: '/public',
      label: 'Public',
      icon: faHome,
    },
    {
      id: 2,
      route: '/protected',
      label: 'Protected',
      icon: faLock,
    },
    {
      id: 3,
      route: '/admin',
      label: 'Admin',
      icon: faChartLine,
    },
  ];

  const navComponents = navItems.map((item) => {
    const classNames = cx('mobile-li', {
      active: location.pathname === item.route,
    });
    return (
      <li key={item.id.toString()} className={classNames}>
        <NavLink to={item.route.toString()} end>
          <div className='mobile-nav-icon'>
            <FontAwesomeIcon icon={item.icon as IconDefinition} />
          </div>
          {item.label.toString()}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className='mobile-nav'>
      <ul className='mobile-ul'>{navComponents}</ul>
    </nav>
  );
};
