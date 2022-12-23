import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector } from '../../../../app/store';
import cart from '../../../../assets/icons/cart.svg';
import instagram from '../../../../assets/icons/instagram.svg';
import classes from '../UpperMenu.module.css';

function IconsPhone() {
  const numberOfItems = useAppSelector((state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
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
  );
}
export default IconsPhone;
