import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../page/Home';
import ProductDetails from '../components/Products/ProductDetails';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h3>error</h3>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/ProductDetails',
        element: <ProductDetails />,
      },
     
    ],
  },
]);
