import React from 'react';
import Products from '../Products/Products';

const AllData = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-full lg:basis-1/2 bg-gray-300'>table </div>
      <div className='w-full lg:basis-1/2 bg-green-300 '>
        <Products/>
      </div>
    </div>
  );
};

export default AllData;