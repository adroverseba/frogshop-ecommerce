import React from 'react';
import { Nav } from 'common/Nav';
import { Header } from 'components/Header';
import { HeaderDashboard } from 'components/HeaderDashboard';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-full">
      <Header />
      <HeaderDashboard />
      <Nav />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};
