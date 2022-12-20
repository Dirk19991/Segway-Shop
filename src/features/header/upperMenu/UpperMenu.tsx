import cart from '../../../assets/icons/cart.svg';
import instagram from '../../../assets/icons/instagram.svg';
import classes from './UpperMenu.module.css';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { slide as Menu } from 'react-burger-menu';
import { burgerStyles } from './burgerStyles';
import { useMediaQuery } from 'react-responsive';
import { toggleMenu } from './menuSlice';
import { useAppSelector, useAppDispatch } from '../../../app/store';

function UpperMenu() {
  const dispatch = useAppDispatch();

  const numberOfItems = useAppSelector((state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  const menuOpened = useAppSelector((state) => state.menuOpened.menuOpened);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // учитывает высоту прикрепленного header
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const tabNames = ['home', 'features', 'accessories', 'app', 'contacts'];

  const links2 = tabNames.map((tab) => {
    // features отстутствуют в мобильной версии - рендерим их только на десктоп
    const shouldRender =
      tab !== 'features' || (tab === 'features' && !isMobile);
    return (
      shouldRender && (
        <HashLink
          onClick={() => dispatch(toggleMenu(false))}
          className={classes.routerLink}
          smooth
          to={`/#${tab}`}
          scroll={(el) => scrollWithOffset(el)}
        >
          {tab.toUpperCase()}
        </HashLink>
      )
    );
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.upperMenu}>
        <ul className={classes.links}>
          {isMobile ? (
            <Menu
              onStateChange={(state) => dispatch(toggleMenu(state.isOpen))}
              isOpen={menuOpened}
              className={classes.menu}
              width={'200px'}
              styles={burgerStyles}
            >
              {links2}
            </Menu>
          ) : (
            links2
          )}
        </ul>

        <ul>
          <li>
            <RouterLink
              className={classes.cart}
              data-number={numberOfItems}
              to='cart'
            >
              <img src={cart} alt='cart'></img>
            </RouterLink>
          </li>

          <li>
            <a className={classes.instagram} href='http://instagram.com'>
              <img src={instagram} alt='instagram'></img>
            </a>
          </li>
          <li>+1 (888) 888-88-88</li>
        </ul>
      </div>
    </div>
  );
}
export default UpperMenu;
