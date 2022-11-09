import cart from '../../assets/icons/cart.svg';
import instagram from '../../assets/icons/instagram.svg';
import classes from './UpperMenu.module.css';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function UpperMenu() {
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
            <HashLink className={classes.routerLink} smooth to='/#features'>
              FEATURES
            </HashLink>
          </li>
          <li>
            <HashLink className={classes.routerLink} smooth to='/#accessories'>
              ACCESSORIES
            </HashLink>
          </li>
          <li>
            <HashLink className={classes.routerLink} smooth to='/#app'>
              APP
            </HashLink>
          </li>
          <li>
            <HashLink className={classes.routerLink} smooth to='/#contacts'>
              CONTACTS
            </HashLink>
          </li>
        </ul>

        <ul>
          <RouterLink to='cart'>
            <li>
              <img className={classes.cart} src={cart} alt='cart'></img>
            </li>
          </RouterLink>

          <li>
            <img className={classes.cart} src={instagram} alt='instagram'></img>
          </li>
          <li>+1 (888) 888-88-88</li>
        </ul>
      </div>
    </div>
  );
}
export default UpperMenu;
