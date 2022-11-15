import Header from '../features/header/Header';
import ItemModal from '../features/modal/ItemModal';
import ClearCartModal from '../features/modal/ClearCartModal';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../features/cart/placeOrderSlice';
import { setMobile } from './isMobileSlice';

function App() {
  const open = useSelector((state) => state.modal.open);
  const openClearCart = useSelector((state) => state.clearCartModal.open);

  const dispatch = useDispatch();

  let location = useLocation();

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
