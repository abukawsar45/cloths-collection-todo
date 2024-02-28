import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import OrderedProducts from '../OrderedProducts/OrderedProducts';
import { addToDb, removeFromDb, getShoppingCart } from '../../utils/fakeDb';
import toast from 'react-hot-toast';

const AllData = () => {
  const [cart, setCart] = useState([]);
  const [productsData, setProductsData] = useState([]);

  console.log(cart);
  let newCart = [];

  // add products
  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.id === product.id);
    if (exists) {
      return toast.error('Already exists!');
      
      // exists.quantity = exists.quantity + 1;
      // const remaining = cart.filter((pd) => pd.id !== product.id);
      // newCart = [...remaining, exists];
    } else {
      product.quantity = 1;
      toast.success('Add to cart successfully!');
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  // remove products
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  // handle product quantity
const handleQuantity = (direction, product) => {
  if (direction === 'increment') {
    product.quantity += 1;
  } else if (direction === 'decrement') {
    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      return; // Don't decrement if quantity is already 1 or less
    }
  }

  const updatedCart = cart.map((item) => {
    if (item.id === product.id) {
      return { ...item, quantity: product.quantity };
    }
    return item;
  });

  setCart(updatedCart);
  addToDb(product.id, direction);
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

   useEffect(() => {
     const fetchData = async () => {
       try {
         const storedCart = getShoppingCart();
         console.log({ storedCart });

         const orderData = Object.keys(storedCart).map((id) => {
           const addedProduct = productsData?.find((pd) => pd.id === id);
           console.log({ addedProduct });
           if (addedProduct) {
             const quantity = storedCart[id];
             console.log({ quantity });
             addedProduct.quantity = quantity;
             console.log({ addedProduct });
             return addedProduct;
           }
           return null;
         });

         console.log({ orderData });
         setCart(orderData.filter(Boolean));
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };

     fetchData();
   }, [productsData]);

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-full lg:basis-1/2  px-2 py-1'>
        <OrderedProducts
          handleAddToCart={handleAddToCart}
          cart={cart}
          setCart={setCart}
          productsData={productsData}
          handleRemoveFromCart={handleRemoveFromCart}
          handleQuantity={handleQuantity}
        />
      </div>
      <div className='w-full lg:basis-1/2 px-2 py-1'>
        <Products
          handleAddToCart={handleAddToCart}
          productsData={productsData}
        />
      </div>
    </div>
  );
};

export default AllData;
