import React from 'react';
import { GrCart   } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { CgDetailsMore } from 'react-icons/cg';


const ProductsCart = ({ product, handleAddToCart }) => {
  const data = product;
  // console.log(data);


  const handleMoreView = () => {
    console.log('more');
  };
  const handleShortView = () => {
    console.log('short view');
  };

  const {
    categroy,
    id,
    img,
    name,
    price,
    quantity,
    ratings,
    ratingsCount,
    seller,
    shippings,
    stock,
  } = product;

  const handleModal = () => {
    console.log('first');
  };

  return (
    <div className='my-2shadow-xl shadow-indigo-200 hover:shadow-lime-500 flex flex-col w-full h-full rounded-xl duration-100 group'>
      <div className='relative text-sm flex gap-2 items-center my-4 overflow-hidden  '>
        <img
          src={img}
          alt='product-image'
          className='ease-in duration-300 group-hover:scale-125 transition rounded-lg  h-32 
              w-full  object-cover mx-auto'
        />
        <div className='absolute bottom-4 right-4 lg:bottom-2 lg:right-2 flex lg:flex-col gap-4'>
          <button
            title='Add to cart'
            data-bs-placement='right'
            onClick={() => handleAddToCart(product)}
            className=' block bg-violet-300 p-1 hover:bg-violet-500  cursor-pointer rounded-full opacity-0 group-hover:opacity-100 checked:opacity-100'
          >
            <GrCart className=' w-6 h-6 lg:w-4 lg:h-4' />
          </button>
          <button
            title='More details'
            data-bs-placement='right'
            onClick={() => handleMoreView()}
            className=' block bg-violet-300 p-1 hover:bg-violet-500  cursor-pointer rounded-full opacity-0 group-hover:opacity-100 checked:opacity-100'
          >
            <CgDetailsMore className=' w-6 h-6 lg:w-4 lg:h-4' />
          </button>
          <button
            title='Quick view'
            data-bs-placement='right'
            onClick={() => handleShortView()}
            className=' block bg-violet-300 p-1 hover:bg-violet-500  cursor-pointer rounded-full opacity-0 group-hover:opacity-100 checked:opacity-100'
          >
            <FaEye className=' w-6 h-6 lg:w-4 lg:h-4' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
