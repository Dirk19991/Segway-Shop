import classes from './Cart.module.css';
import scooter from '../../assets/images/undraw_scooter.svg';
import { useAppSelector } from '../../app/store';
import CartItems from './cartItems/CartItems';
import TotalCart from './totalCart/TotalCart';

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);

  // в зависимости от того, купил ли пользователь что-то,
  // рендерим сообщение "The order was placed!" или ничего
  const orderPlaced = useAppSelector((state) => state.placeOrder.orderPlaced);

  // если в корзине нет товаров, рендерим картинку и "Your cart is currently empty"
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
            <img src={scooter} alt="scooter" />
          </div>
        )}
        {numberOfItems > 0 && <TotalCart />}
      </div>
    </div>
  );
}
export default Cart;
