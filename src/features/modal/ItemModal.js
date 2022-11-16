import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from './modalSlice';
import classes from './ItemModal.module.css';
import { addToCart } from '../cart/cartSlice';
import PlusMinusButton from '../common/PlusMinusButton';
import { useMediaQuery } from 'react-responsive';

export default function ItemModal() {
  const open = useSelector((state) => state.modal.open);
  const chosenItem = useSelector((state) => state.modal.chosenItem);
  console.log(chosenItem);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: isMobile ? 240 : 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 4,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    paddingRight: '0',
  };

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={() => dispatch(toggleModal(false))}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          style: { backgroundColor: 'rgba(0,0,0, 0.5)' },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className={classes.image}>
              <img
                alt={chosenItem.image}
                src={require(`../../assets/images/scootersHD/${chosenItem.image}.png`)}
              ></img>
            </div>
            <div className={classes.name}>{chosenItem.name}</div>
            <div className={classes.characteristics}>
              <div className={classes.characteristicsNames}>
                <div>Max Speed</div>
                <div>Max Distance</div>
                <div>Battery Capacity</div>
                <div>Weight</div>
                <div>Charge Time</div>
                <div>Price</div>
              </div>
              <div className={classes.characteristicsValues}>
                <div>{chosenItem.maxSpeed}</div>
                <div>{chosenItem.maxDistance}</div>
                <div>{chosenItem.battery}</div>
                <div>{chosenItem.weight}</div>
                <div>{chosenItem.charge}</div>
                <div>{chosenItem.price}</div>
              </div>
            </div>

            {cart.cart.find((item) => item.id === chosenItem.id)?.quantity >
            0 ? (
              <PlusMinusButton
                marginTop='23px'
                height='39px'
                elem={cart.cart.find((item) => item.id === chosenItem.id)}
              />
            ) : (
              <button
                onClick={() => dispatch(addToCart(chosenItem))}
                className={classes.button}
              >
                Add to cart
              </button>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
