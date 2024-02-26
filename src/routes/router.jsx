import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../page/Home';


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
     
    ],
  },
]);
