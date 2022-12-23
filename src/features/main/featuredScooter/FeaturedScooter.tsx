import classes from './FeaturedScooter.module.css';
import bigScooter from '../../../assets/images/scooters/bigScooter.png';
import { addToCart } from '../../cart/cartSlice';
import PlusMinusButton from '../../../components/PlusMinusButton';
import { Link as RouterLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import PaymentMethods from './paymentMethods/PaymentMethods';
import Guarantees from './guarantees/Guarantees';
import ProtectiveGear from './protectiveGear/ProtectiveGear';
import { chooseModel } from '../../../utilities/chooseModel';

export interface FeaturedModel {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  maxSpeed: string;
  maxDistance: string;
  battery: string;
  weight: string;
  charge: string;
  price: string;
}

function FeaturedScooter() {
  const state = useAppSelector((state) => state.featuredModel);
  const cart = useAppSelector((state) => state.cart);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useAppDispatch();

  const modelToAdd = chooseModel(state);

  const handleAddToCart = (model: any) => {
    dispatch(addToCart(model));
  };

  const quantityToAdd = cart.cart.find(
    (item) => item.id === modelToAdd.id
  )?.quantity;

  return (
    <div className={classes.wrapper}>
      <div className={classes.featuredScooter}>
        <div className={classes.features}>
          <div className={classes.greenButton}>In Stock</div>
          <div className={classes.bigTitle}>SEGWAY NINEBOT KICKSCOOTER MAX</div>
          <div className={classes.card}>
            <Guarantees />
            <ProtectiveGear />
            <div className={classes.buttons}>
              <RouterLink className={classes.routerLink} to='cart'>
                <button
                  onClick={() => dispatch(addToCart(modelToAdd))}
                  className={classes.button}
                >
                  BUY IT NOW
                </button>
              </RouterLink>

              {quantityToAdd !== undefined && quantityToAdd > 0 ? (
                <PlusMinusButton
                  width={isMobile ? '120px' : '240px'}
                  height={isMobile ? '35px' : '48px'}
                  justifyContent='space-evenly'
                  elem={cart.cart.find((item) => item.id === modelToAdd.id)}
                />
              ) : (
                <button
                  onClick={() => handleAddToCart(modelToAdd)}
                  className={classes.button}
                >
                  ADD TO CART
                </button>
              )}
            </div>
          </div>
          <PaymentMethods />
        </div>
        <div className={classes.image}>
          <img src={bigScooter} alt='bigScooter' />
        </div>
      </div>
    </div>
  );
}
export default FeaturedScooter;
