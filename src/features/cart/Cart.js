import classes from './Cart.module.css';
import { useSelector } from 'react-redux';
import scooter from '../../assets/images/undraw_scooter.svg';
import { toggleModal } from './clearCartModalSlice';
import PlusMinusButton from '../common/PlusMinusButton';
import { useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';
import { placeOrder } from './placeOrderSlice';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const orderPlaced = useSelector((state) => state.placeOrder.orderPlaced);
  const numberOfItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const total = cart
    .reduce(
      (acc, elem) => acc + elem.price.replaceAll('$', '') * elem.quantity,
      0
    )
    .toFixed(2);

  const dispatch = useDispatch();

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

        <div className={classes.cartGrid}>
          {cart.map((elem) => (
            <div className={classes.item}>
              <div className={classes.image}>
                <img
                  alt={elem.image}
                  src={require(`../../assets/images/scootersHD/${elem.image}.png`)}
                ></img>
              </div>
              <div className={classes.modelInfo}>
                <div>{elem.name}</div>
                <div>{elem.price}</div>

                <PlusMinusButton width='80px' height='20px' elem={elem} />
              </div>
            </div>
          ))}
        </div>
        {numberOfItems === 0 && (
          <div className={classes.scooterImage}>
            <img src={scooter} alt='scooter' />
          </div>
        )}
        {numberOfItems > 0 && (
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
        )}
      </div>
    </div>
  );
}
export default Cart;
