import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import ItemModal from './components/modal/ItemModal';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import upArrow from './assets/icons/up.svg';

function App() {
  const open = useSelector((state) => state.modal.open);

  return (
    <>
      {open && <ItemModal />}
      <Header />
      <Outlet />
      <ScrollToTop top={800} smooth color='#000000' width='28' height='28' />
    </>
  );
}

export default App;
