import classes from './PlusMinusButton.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addToCart, decreaseItems } from '../features/cart/cartSlice';
import { CartItem } from '../features/cart/cartSlice';
import { useAppDispatch } from '../app/store';

interface PlusMinusButtonProps {
  className?: string;
  elem: CartItem | undefined;
  width?: string;
  height?: string;
  marginTop?: string;
  justifyContent?: string;
}

function PlusMinusButton({
  elem,
  width,
  height,
  marginTop,
  justifyContent,
}: PlusMinusButtonProps) {
  const dispatch = useAppDispatch();

  const addToCartHandler = (elem: CartItem | undefined) => {
    if (!elem) {
      return;
    }
    dispatch(addToCart(elem));
  };

  const removeItemsHandler = (elem: CartItem | undefined) => {
    if (!elem) {
      return;
    }
    dispatch(decreaseItems(elem));
  };

  return (
    <div>
      <div
        style={{
          width: width,
          height: height,
          marginTop: marginTop,
          justifyContent: justifyContent,
        }}
        className={classes.button}
      >
        <RemoveIcon
          onClick={() => removeItemsHandler(elem)}
          className={classes.minus}
        />
        <div className={classes.quantity}>{elem?.quantity}</div>
        <AddIcon
          onClick={() => addToCartHandler(elem)}
          className={classes.plus}
        />
      </div>
    </div>
  );
}
export default PlusMinusButton;
