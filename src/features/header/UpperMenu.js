import cart from '../../assets/icons/cart.svg';
import instagram from '../../assets/icons/instagram.svg';
import classes from './UpperMenu.module.css';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector, useDispatch } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import { burgerStyles } from './burgerStyles';
import { useMediaQuery } from 'react-responsive';
import { toggleMenu } from './menuSlice';

function UpperMenu() {
  const numberOfItems = useSelector((state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  const menuOpened = useSelector((state) => state.menuOpened.menuOpened);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const dispatch = useDispatch();

  const links = (
    <>
      <li>
        <HashLink
          onClick={() => dispatch(toggleMenu(false))}
          className={classes.routerLink}
          smooth
          to='/#home'
          scroll={(el) => scrollWithOffset(el)}
        >
          HOME
        </HashLink>
      </li>
      {isMobile ? (
        ''
      ) : (
        <li>
          <HashLink
            className={classes.routerLink}
            smooth
            to='/#features'
            scroll={(el) => scrollWithOffset(el)}
          >
            FEATURES
          </HashLink>
        </li>
      )}
      <li>
        <HashLink
          onClick={() => dispatch(toggleMenu(false))}
          className={classes.routerLink}
          smooth
          to='/#accessories'
          scroll={(el) => scrollWithOffset(el)}
        >
          ACCESSORIES
        </HashLink>
      </li>
      <li>
        <HashLink
          onClick={() => dispatch(toggleMenu(false))}
          className={classes.routerLink}
          smooth
          to='/#app'
          scroll={(el) => scrollWithOffset(el)}
        >
          APP
        </HashLink>
      </li>
      <li>
        <HashLink
          onClick={() => dispatch(toggleMenu(false))}
          className={classes.routerLink}
          smooth
          to='/#contacts'
          scroll={(el) => scrollWithOffset(el)}
        >
          CONTACTS
        </HashLink>
      </li>
    </>
  );

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
              {links}
            </Menu>
          ) : (
            links
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
