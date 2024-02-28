import React, { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart';
import { BsUpcScan } from 'react-icons/bs';
import { IoSearchSharp } from 'react-icons/io5';

const Products = ({ handleAddToCart, cart, setProductsData, productsData }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchBar = (e) => {
    e.preventDefault();
    const searchByName = e.target.searchByProductName.value;
    console.log(searchByName);
    setSearchInput(searchByName);
    const filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setProductsData(filteredProducts);
  };

  // Filter products based on search input

  return (
    <div>
      <form
        onSubmit={handleSearchBar}
        className='text-center flex items-center w-full '
      >
        <span>
          <IoSearchSharp className='text-xl' />
        </span>
        <input
          type='text'
          name='searchByProductName'
          placeholder='Search by products name...'
          className='relative rounded-s-full px-4 py-2 text-black  focus:border-none focus:outline-none  w-11/12 border-none'
        />
        <button
          type='submit'
          className='absolute right-0 bg-black  text-white rounded-full -ml-8 px-4 md:px-16 py-2 border-none border-slate-100 custom-josefin text-center'
        >
          <BsUpcScan />
        </button>
      </form>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-8'>
        {productsData?.length > 1 ? (
          <>
            {productsData?.slice(0, 15)?.map((product) => (
              <ProductsCart
                key={product._id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </>
        ) : (
          <>
            <div className='w-full  flex justify-center items-center text-red-500 font-bold my-4'>
              <p>No data found</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
