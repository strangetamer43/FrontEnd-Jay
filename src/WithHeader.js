import React from 'react'

import Header from './Header';
import { Outlet } from 'react-router';

function WithHeader()  {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};





export default WithHeader
