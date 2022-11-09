import classes from './Cart.module.css';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);

  return (
    <div className={classes.wrapper}>
      <div className={classes.cart}>
        <div className={classes.header}>YOUR CART</div>
        {cart.map((elem) => (
          <div className={classes.cartGrid}>
            <div className={classes.item}>
              <div>{elem.name}</div>
              <div>{elem.quantity}</div>
              <div>{elem.image}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cart;
