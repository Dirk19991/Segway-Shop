import classes from './Cart.module.css';
import { useSelector } from 'react-redux';
import scooter from '../../assets/images/undraw_scooter.svg';
import { RootState } from '../../app/store';
import CartItems from './cartItems/CartItems';
import TotalCart from './totalCart/TotalCart';

function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const orderPlaced = useSelector(
    (state: RootState) => state.placeOrder.orderPlaced
  );
  const numberOfItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={classes.wrapper}>
      <div className={classes.cart}>
        {orderPlaced && (
          <>
            <div className={classes.orderHeader}>The order was placed!</div>
            <hr />
            <hr />
          </>
        )}
        {numberOfItems === 0 ? (
          <div className={classes.header}>Your cart is currently empty</div>
        ) : (
          <div className={classes.header}>YOUR CART</div>
        )}

        <CartItems />
        {numberOfItems === 0 && (
          <div className={classes.scooterImage}>
            <img src={scooter} alt='scooter' />
          </div>
        )}
        {numberOfItems > 0 && <TotalCart />}
      </div>
    </div>
  );
}
export default Cart;
