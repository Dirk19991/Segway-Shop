import { useAppDispatch, useAppSelector } from '../../../app/store';
import classes from '../Cart.module.css';
import { clearCart } from '../cartSlice';
import { toggleModal } from '../clearCartModalSlice';
import { placeOrder } from '../placeOrderSlice';

function TotalCart() {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart.cart);

  const total = cart
    .reduce(
      (acc, elem) => acc + +elem.price.replaceAll('$', '') * elem.quantity,
      0
    )
    .toFixed(2);

  return (
    <div className={classes.flex}>
      <div className={classes.header}>TOTAL: ${total}</div>
      <div className={classes.buttonContainer}>
        <button
          onClick={() => {
            dispatch(toggleModal(true));
          }}
          className={classes.clearButton}
        >
          CLEAR CART
        </button>
        <button
          onClick={() => {
            dispatch(placeOrder(true));
            dispatch(clearCart());
          }}
          className={classes.orderButton}
        >
          PLACE THE ORDER
        </button>
      </div>
    </div>
  );
}
export default TotalCart;
