import { useRef } from 'react';
import { IMaskInput } from 'react-imask';
import classes from './InputMask.module.css';

export function InputMask({ setInput }) {
  const ref = useRef(null);
  const inputRef = useRef(null);

  const blocks = {
    N: {
      mask: '0',
    },
  };

  return (
    <IMaskInput
      className={classes.input}
      mask={'+7 (NNN) NNN-NN-NN'}
      lazy={false}
      radix='.'
      blocks={blocks}
      unmask={true}
      ref={ref}
      inputRef={inputRef}
      placeholder='Enter number here'
      onAccept={(mask, value) => setInput(mask.length)}
    />
  );
}
