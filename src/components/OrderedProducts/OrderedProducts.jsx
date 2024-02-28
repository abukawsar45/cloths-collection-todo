import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utils/fakeDb';
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from 'react-icons/gr';

const OrderedProducts = ({
  productsData,
  cart,
  setCart,
  handleAddToCart,
  handleRemoveFromCart,
  handleQuantity,
}) => {
  console.log(productsData);

  return (
    <div>
      Order
      <p>{cart?.length}</p>
      <div className='p-4'>
        <div className='flex flex-col'>
          <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
              <div className='overflow-hidden'>
                <table className='min-w-full text-left text-sm font-light'>
                  {/* <thead className='border-b font-medium dark:border-neutral-500'>
                    <tr>
                      <th scope='col' className='px-6 py-2'>
                        #
                      </th>
                      <th scope='col' className='px-6 py-2'>
                        First
                      </th>
                      <th scope='col' className='px-6 py-2'>
                        Last
                      </th>
                      <th scope='col' className='px-6 py-2'>
                        Total
                      </th>
                      <th scope='col' className='px-6 py-2'>
                        Remove
                      </th>
                    </tr>
                  </thead> */}
                  <tbody>
                    {cart?.map((orderProduct) => {
                      return (
                        <>
                          <tr className='border-b font-bold text-gray-400 dark:border-neutral-500'>
                            <td className='whitespace-nowrap px-6 py-2 font-medium'>
                              1
                            </td>
                            <td className='whitespace-nowrap px-6 py-2'>
                              {orderProduct?.name?.length > 12
                                ? orderProduct?.name.substring(0, 10) + '...'
                                : orderProduct?.name}{' '}
                            </td>
                            <td className=' whitespace-nowrap px-6 py-2'>
                              ${orderProduct?.price}
                            </td>
                            <td className=' whitespace-nowrap px-6 py-2 flex justify-between items-center gap-1'>
                              <button
                                onClick={() =>
                                  handleQuantity('decrement', orderProduct)
                                }
                                disabled={orderProduct?.quantity <= 1}
                                className={`bg-gray-400 flex  justify-center items-center text-bold p-1 h-6 w-6 rounded-full ${
                                  orderProduct?.quantity === 1
                                    ? 'bg-gray-500 cursor-default text-gray-600'
                                    : 'hover:text-gray-700 text-white  '
                                } `}
                              >
                                <GrFormSubtract cl />
                              </button>
                              <span>{orderProduct?.quantity}</span>

                              <button
                                onClick={() =>
                                  handleQuantity('increment', orderProduct)
                                }
                                className='bg-gray-400 flex justify-center items-center p-1 text-white hover:text-gray-900 text-bold h-6 w-6 rounded-full '
                              >
                                <IoMdAdd />
                              </button>
                            </td>
                            <td className=' whitespace-nowrap px-6 py-2'>
                              ${orderProduct?.price * orderProduct?.quantity}
                            </td>
                            <td className='whitespace-nowrap px-6 py-2'>
                              <button
                                onClick={() =>
                                  handleRemoveFromCart(orderProduct?.id)
                                }
                                className=''
                              >
                                <MdDelete className='text-red-400 hover:text-red-600 text-xl' />
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedProducts;
