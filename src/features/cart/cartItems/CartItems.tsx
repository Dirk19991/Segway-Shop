import classes from '../Cart.module.css';
import { useAppSelector } from '../../../app/store';
import PlusMinusButton from '../../../components/PlusMinusButton';

function CartItems() {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <>
      <div className={classes.cartGrid}>
        {cart.map((elem) => (
          <div key={elem.id} className={classes.item}>
            <div className={classes.image}>
              <img
                alt={elem.image}
                src={require(`../../../assets/images/scootersHD/${elem.image}.png`)}
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
    </>
  );
}

export default CartItems;
