import Header from './components/header/Header';
import ItemModal from './components/modal/ItemModal';
import ClearCartModal from './components/modal/ClearCartModal';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { placeOrder } from './store/placeOrderSlice';

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
