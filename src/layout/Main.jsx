import React from 'react';
import { Outlet } from 'react-router-dom';


const Main = () => {


  return (
    <div className=' sm:mx-1 md:mx-2 lg:mx-4 2xl:mx-auto max-w-[1800px]  '>
      <div className=' min-h-[100vh] '>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
