import { getShoppingCart } from '../../utils/fakeDb';

const BookingProductsLoader = async () => {
  try {
    const loadedProducts = await fetch('data.json');
    const products = await loadedProducts.json();
    console.log({ products });

    const storedCart = getShoppingCart();
    console.log({ storedCart });
    const savedCart = [];

    const orderData = Object.keys(storedCart).map((id) => {
      const addedProduct = products.find((pd) => pd.id === id);
      console.log({ addedProduct });
      if (addedProduct) {
        const quantity = storedCart[id];
        console.log({ quantity });
        addedProduct.quantity = quantity;
        console.log({ addedProduct });
        savedCart.push(addedProduct); // Push the product into the array, not the result of push
      }
    });

    return savedCart;
  } catch (error) {
    console.error('Error loading products:', error);
    return []; // Return an empty array in case of error
  }
};

export default BookingProductsLoader;
