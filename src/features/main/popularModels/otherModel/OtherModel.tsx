import { Category } from '../../featuredScooter/FeaturedScooter';
import PlusMinusButton from '../../../../components/PlusMinusButton';
import classes from '../OtherModels.module.css';
import { useAppDispatch, useAppSelector } from '../../../../app/store';
import { addToCart } from '../../../cart/cartSlice';

interface OtherModelProps {
  quantityToAdd: number | undefined;
  elem: Category;
}

function OtherModel({ quantityToAdd, elem }: OtherModelProps) {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div key={elem.id} className={classes.otherModel}>
      <div className={classes.image}>
        <img
          src={require(`../../../../assets/images/otherModels/${elem.image}.png`)}
          alt={elem.image}
        ></img>
      </div>

      <div className={classes.modelHeader}>{elem.name}</div>
      <div className={classes.price}>{elem.price}</div>

      {quantityToAdd !== undefined && quantityToAdd > 0 ? (
        <PlusMinusButton elem={cart.cart.find((item) => item.id === elem.id)} />
      ) : (
        <button
          onClick={() => dispatch(addToCart(elem))}
          className={classes.button}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
export default OtherModel;
