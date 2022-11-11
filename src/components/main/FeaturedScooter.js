import classes from './FeaturedScooter.module.css';
import protection from '../../assets/images/protection.png';
import bigScooter from '../../assets/images/scooters/bigScooter.png';
import amazon from '../../assets/images/amazon.png';
import paymentOptions from '../../assets/images/paymentOptions.png';
import { useDispatch, useSelector } from 'react-redux';
import { chooseGuarantee } from '../../store/featuredModel';
import featuredModel from '../../data/featuredModel.json';
import categories from '../../data/categories.json';
import { addToCart } from '../../store/cartSlice';
import PlusMinusButton from '../utitlities/PlusMinusButton';
import { Link as RouterLink } from 'react-router-dom';

function FeaturedScooter() {
  const totalCost = useSelector((state) => state.featuredModel.totalCost);
  const guarantees = useSelector((state) => state.featuredModel.guarantees);
  const state = useSelector((state) => state.featuredModel);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  function chosenModel() {
    if (state.id) {
      return featuredModel.find((elem) => elem.id === state.id);
    } else {
      return categories.find((elem) => elem.id === 6);
    }
  }

  const modelToAdd = chosenModel();

  console.log(modelToAdd);

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
              <div
                onClick={() =>
                  dispatch(
                    chooseGuarantee({ price: 139, chosen: 'low', id: 23 })
                  )
                }
                className={
                  guarantees.low
                    ? classes.warrantyPriceBlue
                    : classes.warrantyPrice
                }
              >
                1 year - $139
              </div>
              <div
                onClick={() =>
                  dispatch(
                    chooseGuarantee({ price: 209, chosen: 'middle', id: 24 })
                  )
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
                  dispatch(
                    chooseGuarantee({ price: 279, chosen: 'high', id: 25 })
                  )
                }
                className={
                  guarantees.high
                    ? classes.warrantyPriceBlue
                    : classes.warrantyPrice
                }
              >
                3 years - $279
              </div>
            </div>
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
            <div className={classes.buttons}>
              <RouterLink className={classes.routerLink} to='cart'>
                <button className={classes.button}>BUY IT NOW</button>
              </RouterLink>

              {cart.cart.find((item) => item.id === modelToAdd.id)?.quantity >
              0 ? (
                <PlusMinusButton
                  width='240px'
                  height='48px'
                  justifyContent='space-evenly'
                  elem={cart.cart.find((item) => item.id === modelToAdd.id)}
                />
              ) : (
                <button
                  onClick={() => dispatch(addToCart(modelToAdd))}
                  className={classes.button}
                >
                  ADD TO CART
                </button>
              )}
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
