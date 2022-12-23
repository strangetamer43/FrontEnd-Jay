import React from 'react'

import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';

function WithFooter()  {
  return (
    <>
        <Outlet />
        <Footer />
      
    </>
  );
};





export default WithFooter;