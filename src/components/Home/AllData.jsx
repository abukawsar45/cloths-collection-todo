import React from 'react';
import Products from '../Products/Products';
import OrderedProducts from '../BookingProducts/OrderedProducts';

const AllData = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-full lg:basis-1/2 bg-gray-300 px-2 py-1'>
        <OrderedProducts/>
      </div>
      <div className='w-full lg:basis-1/2 px-2 py-1'>
        <Products />
      </div>
    </div>
  );
};

export default AllData;