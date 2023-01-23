import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { toggleModal } from '../cart/clearCartModalSlice';
import classes from './ClearCartModal.module.css';
import { clearCart } from '../cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../app/store';

export default function ClearCartModal() {
  const open = useAppSelector((state) => state.clearCartModal.open);

  const dispatch = useAppDispatch();
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => dispatch(toggleModal(false))}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle className={classes.title} id='alert-dialog-title'>
          {'Are you sure you want to clear the cart?'}
        </DialogTitle>

        <DialogActions className={classes.options}>
          <Button
            className={classes.button}
            onClick={() => {
              dispatch(clearCart());
              dispatch(toggleModal(false));
            }}
          >
            CONFIRM
          </Button>
          <Button
            className={classes.button}
            onClick={() => dispatch(toggleModal(false))}
            autoFocus
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
