import Header from '../features/header/Header';
import ItemModal from '../features/modal/ItemModal';
import ClearCartModal from '../features/modal/ClearCartModal';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { useEffect } from 'react';
import { placeOrder } from '../features/cart/placeOrderSlice';
import { useAppDispatch, useAppSelector } from './store';

function App() {
  const open = useAppSelector((state) => state.modal.open);
  const openClearCart = useAppSelector((state) => state.clearCartModal.open);
  const dispatch = useAppDispatch();

  let location = useLocation();

  // убираем надпись "The order was placed" если покупатель ушел со страницы заказа
  useEffect(() => {
    dispatch(placeOrder(false));
  }, [location, dispatch]);

  return (
    <>
      {open && <ItemModal />}
      {openClearCart && <ClearCartModal />}
      <Header />
      <Outlet />
      <ScrollToTop top={800} smooth color='#000000' width='28' height='28' />
    </>
  );
}

export default App;
