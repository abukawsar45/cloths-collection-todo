import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utils/fakeDb';

const OrderedProducts = () => {
  const [orderedData, setOrderedData] = useState([]);
  console.log(orderedData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loadedProducts = await fetch('data.json');
        const products = await loadedProducts.json();
        console.log({ products });

        const storedCart = getShoppingCart();
        console.log({ storedCart });

        const orderData = Object.keys(storedCart).map((id) => {
          const addedProduct = products.find((pd) => pd.id === id);
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
        setOrderedData(orderData.filter(Boolean));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [orderedData]);

  return (<div>
    Order
    <p>
      {orderedData?.length}
    </p>
    </div>);
};

export default OrderedProducts;
