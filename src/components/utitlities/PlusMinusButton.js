import classes from './PlusMinusButton.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseItems } from '../../store/cartSlice';

function PlusMinusButton({ elem, width, height, marginTop, justifyContent }) {
  const dispatch = useDispatch();
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
          onClick={() => dispatch(decreaseItems(elem))}
          className={classes.minus}
        />
        <div className={classes.quantity}>{elem.quantity}</div>
        <AddIcon
          onClick={() => dispatch(addToCart(elem))}
          className={classes.plus}
        />
      </div>
    </div>
  );
}
export default PlusMinusButton;
