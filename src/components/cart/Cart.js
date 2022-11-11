import classes from './Cart.module.css';
import { useSelector } from 'react-redux';

import PlusMinusButton from '../utitlities/PlusMinusButton';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const numberOfItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const total = cart
    .reduce(
      (acc, elem) => acc + elem.price.replaceAll('$', '') * elem.quantity,
      0
    )
    .toFixed(2);
  return (
    <div className={classes.wrapper}>
      <div className={classes.cart}>
        <div className={classes.header}>YOUR CART</div>
        <div className={classes.cartGrid}>
          {cart.map((elem) => (
            <div className={classes.item}>
              <div className={classes.image}>
                <img
                  alt={elem.image}
                  src={require(`../../assets/images/scootersHD/${elem.image}.png`)}
                ></img>
              </div>
              <div>{elem.name}</div>
              <div>{elem.price}</div>

              <PlusMinusButton width='80px' height='20px' elem={elem} />
            </div>
          ))}
        </div>
        {numberOfItems > 0 && (
          <div className={classes.header}>TOTAL: ${total}</div>
        )}
      </div>
    </div>
  );
}
export default Cart;
