import classes from './OtherModels.module.css';
import otherModels from '../../../data/otherModels.json';
import { InputMask } from './inputMask/InputMask';
import { useState } from 'react';
import { useAppSelector } from '../../../app/store';
import { Category } from '../featuredScooter/FeaturedScooter';
import OtherModel from './otherModel/OtherModel';

function OtherModels() {
  const [input, setInput] = useState(0);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (input === 10) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 1500);
    } else {
      setSent(false);
    }
  }

  const cart = useAppSelector((state) => state.cart);

  return (
    <div className={classes.wrapper}>
      <div id='otherModels' className={classes.otherModels}>
        <div className={classes.header}>Popular models</div>
        <div className={classes.subheader}>
          Check out the entire line of Segway scooters
        </div>
        <div className={classes.otherModelsGrid}>
          {otherModels.map((elem: Category) => {
            const quantityToAdd = cart.cart.find(
              (item) => item.id === elem.id
            )?.quantity;

            return <OtherModel quantityToAdd={quantityToAdd} elem={elem} />;
          })}
          <div className={classes.otherModel}>
            <div className={classes.modelHeader}>DIDN'T FIND A MODEL?</div>
            <div className={classes.subheader}>
              Leave your contact details and we will help you with the choice
            </div>
            <form className={classes.form} onSubmit={handleSubmit}>
              <InputMask setInput={setInput} />
              {sent && input === 10 ? (
                <button className={classes.sentButton}>Sent!</button>
              ) : (
                <button className={classes.button}>Send</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OtherModels;
