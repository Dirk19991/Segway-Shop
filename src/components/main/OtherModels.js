import classes from './OtherModels.module.css';
import otherModels from '../../data/otherModels.json';
import { InputMask } from './InputMask';
import { useState } from 'react';

function OtherModels() {
  const [input, setInput] = useState(0);
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
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

  return (
    <div className={classes.wrapper}>
      <div className={classes.otherModels}>
        <div className={classes.header}>Other models</div>
        <div className={classes.subheader}>
          Check out the entire line of Segway scooters
        </div>
        <div className={classes.otherModelsGrid}>
          {otherModels.map((elem) => {
            return (
              <div key={elem.id} className={classes.otherModel}>
                <div className={classes.image}>
                  <img
                    src={require(`../../assets/images/otherModels/${elem.image}.png`)}
                    alt={elem.image}></img>
                </div>
                <div className={classes.modelHeader}>{elem.name}</div>
                <div className={classes.price}>{elem.price}</div>
                <button className={classes.button}>Add to cart</button>
              </div>
            );
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
