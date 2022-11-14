import cart from '../../assets/icons/cart.svg';
import instagram from '../../assets/icons/instagram.svg';
import classes from './UpperMenu.module.css';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';

function UpperMenu() {
  const numberOfItems = useSelector((state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.upperMenu}>
        <ul className={classes.links}>
          <li>
            <RouterLink className={classes.routerLink} to='/'>
              HOME
            </RouterLink>
          </li>
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
          <li>
            <HashLink
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
              className={classes.routerLink}
              smooth
              to='/#contacts'
              scroll={(el) => scrollWithOffset(el)}
            >
              CONTACTS
            </HashLink>
          </li>
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
