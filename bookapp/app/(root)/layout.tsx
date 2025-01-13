import React, { ReactNode } from 'react'
import Header from '@/components/Header';

// this says const layout accepts children which are the type reactnode
const Layout = ({children} : {children: ReactNode}) => {
  return (
  <main className = "root-container">
    {/* we use html 5 semantic name tagh */}
  {/* so we can have a mina container */}
  <div className = " max-auto max-w-7xl">
    <Header/>

        <div className = "mt-20 pb-20"> {children}</div>
  </div>
  </main>
  );
};

export default Layout;