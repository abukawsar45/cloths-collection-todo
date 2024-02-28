import React from 'react';
import { Link } from 'react-router-dom';
import { CiHome } from 'react-icons/ci';

const ProductDetails = () => {
  
  return (
    <div className='flex justify-center items-center '>
      <button
        title='More details'
        className=' block bg-violet-300 p-1 hover:bg-violet-500  cursor-pointer rounded-full opacity-0 group-hover:opacity-100 checked:opacity-100'
      >
        <Link to='/' title='Back to home'>
          <CiHome className=' w-6 h-6 lg:w-4 lg:h-4' />
        </Link>
      </button>
      <p>Details page comming soon</p>
    </div>
  );
};

export default ProductDetails;
