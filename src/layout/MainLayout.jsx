// import Nav from 'common/Nav';
import { Header } from 'components/Header';
import React from 'react';
import { HeaderDashboard } from 'components/HeaderDashboard';

// export const MainLayout = ({ children }) => {
//   return (
//     <div className="min-h-full">
//       <Header />
//       <Nav />
//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
//     </div>
//   );
// };

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <HeaderDashboard />
      {/* <Nav /> */}
      <main>{children}</main>
    </div>
  );
};
