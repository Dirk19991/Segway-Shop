import { useAppSelector } from '../../../../app/store';
import classes from '../FeaturedScooter.module.css';
import protection from '../../../../assets/images/protection.png';

function ProtectiveGear() {
  const totalCost = useAppSelector((state) => state.featuredModel.totalCost);

  return (
    <div className={classes.protectiveGear}>
      <div>
        <div className={classes.strikethrough}>${totalCost + 100}</div>
        <div className={classes.bigPrice}>${totalCost}</div>
      </div>
      <div className={classes.blueText}>
        Segway Protective Gear Set as a gift
      </div>
      <div className={classes.protection}>
        <img src={protection} alt='protection' />
      </div>
    </div>
  );
}

export default ProtectiveGear;
