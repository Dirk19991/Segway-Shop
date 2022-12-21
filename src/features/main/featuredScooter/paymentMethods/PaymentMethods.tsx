import classes from '../FeaturedScooter.module.css';
import amazon from '../../../../assets/images/amazon.png';
import paymentOptions from '../../../../assets/images/paymentOptions.png';

function PaymentMethods() {
  return (
    <>
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
    </>
  );
}

export default PaymentMethods;
