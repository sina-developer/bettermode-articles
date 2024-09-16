import React from 'react';
import Header from '../header/header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <Header />

      <main className='flex-grow container mx-auto p-4'>{children}</main>
    </div>
  );
}

export default Layout;
