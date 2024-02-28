import React from 'react';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Main = () => {


  return (
    <div className=' sm:mx-1 md:mx-2 lg:mx-4 2xl:mx-auto max-w-[1800px]  '>
      <div className=' min-h-[100vh] '>
        <Outlet />
        <Toaster />
      </div>
    </div>
  );
};

export default Main;
