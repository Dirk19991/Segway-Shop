import classes from './Accessories.module.css';
import accessories from '../../../data/accessories.json';
import { addToCart } from '../../cart/cartSlice';
import PlusMinusButton from '../../common/PlusMinusButton';
import { useAppDispatch, useAppSelector } from '../../../app/store';

interface Accessory {
  id: number;
  name: string;
  name1: string;
  name2: string;
  description: string;
  price: string;
  image: string;
}

function Accessories() {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart);

  const handleAddToCart = (elem: Accessory) => {
    dispatch(addToCart(elem));
  };

  return (
    <div className={classes.wrapper}>
      <div id='accessories' className={classes.accessories}>
        {accessories.map((elem: Accessory) => {
          const quantityToAdd = cart.cart.find(
            (item) => item.id === elem.id
          )?.quantity;

          return (
            <div key={elem.id} className={classes.accessory}>
              <div className={classes.image}>
                <img
                  src={require(`../../../assets/images/accessories/${elem.image}.png`)}
                  alt={elem.image}
                ></img>
              </div>
              <div className={classes.header}>{elem.name1}</div>
              <div className={classes.header2}>{elem.name2}</div>
              <div className={classes.description}>{elem.description}</div>
              <div className={classes.price}>{elem.price}</div>

              {quantityToAdd !== undefined && quantityToAdd > 0 ? (
                <PlusMinusButton
                  className={classes.plus}
                  elem={cart.cart.find((item) => item.id === elem.id)}
                />
              ) : (
                <button
                  onClick={() => handleAddToCart(elem)}
                  className={classes.button}
                >
                  Add to cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Accessories;
