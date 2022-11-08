import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import ItemModal from './components/modal/ItemModal';
import { useSelector } from 'react-redux';

function App() {
  const open = useSelector((state) => state.modal.open);

  return (
    <>
      {open && <ItemModal />}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
