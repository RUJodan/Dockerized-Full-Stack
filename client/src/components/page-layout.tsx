import React from 'react';
import { NavBar } from './navigation/desktop/nav-bar';
import { MobileNavBar } from './navigation/mobile/mobile-nav-bar';

interface PageLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className='page-layout'>
      <MobileNavBar />
      <NavBar />
      <div className='page-layout__content'>{children}</div>
    </div>
  );
};
