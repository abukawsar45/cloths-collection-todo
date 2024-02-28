import React, { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart';
import { BsUpcScan } from 'react-icons/bs';
import { IoSearchSharp } from 'react-icons/io5';
import { addToDb } from '../../utils/fakeDb';


const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart)

  const handleSearchBar = (e) => {
    e.preventDefault();
    const searchByName = e.target.searchByProductName.value;
    console.log(searchByName);
  };

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    // fetch('https://top-fashion-server.vercel.app/allProducts')
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductsData(data);
      });
  }, []);

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
        {productsData?.slice(0, 12)?.map((product) => (
          <ProductsCart
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
