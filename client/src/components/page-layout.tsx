import React from 'react';
import { NavBar } from './nav-bar';
import { MobileNavBar } from './mobile-nav-bar';

interface PageLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className='page-layout'>
      <MobileNavBar />
      <NavBar />
      <div className='page-layout-content'>{children}</div>
    </div>
  );
};
