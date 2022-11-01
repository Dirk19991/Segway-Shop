import classes from './FeaturedScooter.module.css';
import protection from '../../assets/images/protection.png';
import bigScooter from '../../assets/images/scooters/bigScooter.png';
import amazon from '../../assets/images/amazon.png';
import paymentOptions from '../../assets/images/paymentOptions.png';

function FeaturedScooter() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.featuredScooter}>
        <div className={classes.features}>
          <div className={classes.greenButton}>In Stock</div>
          <div className={classes.bigTitle}>SEGWAY NINEBOT KICKSCOOTER MAX</div>
          <div className={classes.card}>
            <div className={classes.warrantyMessage}>
              Add an extended warranty from <span>Extend</span>
            </div>
            <div className={classes.warrantyPriceWrapper}>
              <div className={classes.warrantyPrice}>1 year - $139</div>
              <div className={classes.warrantyPrice}>2 years - $209</div>
              <div className={classes.warrantyPrice}>3 years - $279</div>
            </div>
            <div className={classes.protectiveGear}>
              <div>
                <div className={classes.strikethrough}>$1049.99</div>
                <div className={classes.bigPrice}>$949.99</div>
              </div>
              <div className={classes.blueText}>
                Segway Protective Gear Set as a gift
              </div>
              <div className={classes.protection}>
                <img src={protection} alt='protection' />
              </div>
            </div>
            <div className={classes.buttons}>
              <button>BUY IT NOW</button>
              <button>ADD TO CART</button>
            </div>
          </div>
          <div className={classes.paymentMethodsText}>
            <span className={classes.greyText}>Payment Methods: </span>
            <span className={classes.blueText}>
              Starting at $55/mo with <img src={amazon} alt='amazon' />
            </span>
            . <span className={classes.greenText}> Prequalify now</span>
          </div>
          <div className={classes.paymentMethodsIcons}>
            <img src={paymentOptions} alt='paymentOptions' />
          </div>
        </div>
        <div className={classes.image}>
          <img src={bigScooter} alt='bigScooter' />
        </div>
      </div>
    </div>
  );
}
export default FeaturedScooter;
