import React from 'react';
import { Outlet } from 'react-router';





function WithoutHeader()  {
  return (
    <>
      
      <Outlet />
    </>
  );
};





export default WithoutHeader

