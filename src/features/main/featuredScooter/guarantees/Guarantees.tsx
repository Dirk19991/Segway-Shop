import { useAppDispatch, useAppSelector } from '../../../../app/store';
import { chooseGuarantee } from '../featuredModelSlice';
import classes from '../FeaturedScooter.module.css';

function Guarantees() {
  const guarantees = useAppSelector((state) => state.featuredModel.guarantees);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className={classes.warrantyPriceWrapper}>
        <div
          onClick={() =>
            dispatch(chooseGuarantee({ price: 139, chosen: 'low', id: 23 }))
          }
          className={
            guarantees.low ? classes.warrantyPriceBlue : classes.warrantyPrice
          }
        >
          1 year - $139
        </div>
        <div
          onClick={() =>
            dispatch(chooseGuarantee({ price: 209, chosen: 'middle', id: 24 }))
          }
          className={
            guarantees.middle
              ? classes.warrantyPriceBlue
              : classes.warrantyPrice
          }
        >
          2 years - $209
        </div>
        <div
          onClick={() =>
            dispatch(chooseGuarantee({ price: 279, chosen: 'high', id: 25 }))
          }
          className={
            guarantees.high ? classes.warrantyPriceBlue : classes.warrantyPrice
          }
        >
          3 years - $279
        </div>
      </div>
    </>
  );
}

export default Guarantees;
