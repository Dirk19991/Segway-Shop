import cart from '../../assets/icons/cart.svg';
import instagram from '../../assets/icons/instagram.svg';
import classes from './UpperMenu.module.css';
import { Link } from 'react-scroll';

function UpperMenu() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.upperMenu}>
        <ul className={classes.links}>
          <li>
            <Link to='features' spy={true} smooth={true}>
              FEATURES
            </Link>
          </li>
          <li>
            <Link to='accessories' spy={true} smooth={true}>
              ACCESSORIES
            </Link>
          </li>
          <li>
            {' '}
            <Link to='app' spy={true} smooth={true}>
              APP
            </Link>
          </li>
          <li>
            <Link to='otherModels' spy={true} smooth={true}>
              OTHER MODELS
            </Link>
          </li>
          <li>
            {' '}
            <Link to='contacts' spy={true} smooth={true}>
              CONTACTS
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <img className={classes.cart} src={cart} alt='cart'></img>
          </li>
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
