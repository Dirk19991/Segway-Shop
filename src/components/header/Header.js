import UpperMenu from './UpperMenu';
import Logo from './Logo';
import Categories from './Categories';
import FreeShipping from './FreeShipping';

function Header() {
  return (
    <header>
      <UpperMenu />
      <Logo />
      <Categories />
      <FreeShipping />
    </header>
  );
}
export default Header;
