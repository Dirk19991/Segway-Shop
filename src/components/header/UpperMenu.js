import cart from '../../assets/icons/cart.svg';
import instagram from '../../assets/icons/instagram.svg';
import classes from './UpperMenu.module.css';

function UpperMenu() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.upperMenu}>
        <ul>
          <li>REVIEWS</li>
          <li>SHIPPING AND PAYMENT</li>
          <li>WHOLESALE</li>
          <li>BLOG</li>
          <li>CONTACTS</li>
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
