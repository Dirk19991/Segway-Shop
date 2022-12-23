import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Cart from './features/cart/Cart';
import Main from './features/main/Main';
import Footer from './features/footer/Footer';
import store from './app/store';
import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Main />
            <Footer />
          </>
        ),
      },
      {
        path: 'cart',
        element: (
          <>
            <ScrollToTop />
            <Cart />
          </>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
