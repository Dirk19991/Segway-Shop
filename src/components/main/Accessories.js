import classes from './Accessories.module.css';
import accessories from '../../data/accessories.json';

function Accessories() {
  return (
    <div className={classes.wrapper}>
      <div id='accessories' className={classes.accessories}>
        {accessories.map((elem) => {
          return (
            <div key={elem.id} className={classes.accessory}>
              <div className={classes.image}>
                <img
                  src={require(`../../assets/images/accessories/${elem.image}.png`)}
                  alt={elem.image}></img>
              </div>

              <div className={classes.header}>{elem.name1}</div>
              <div className={classes.header2}>{elem.name2}</div>
              <div className={classes.description}>{elem.description}</div>
              <div className={classes.price}>{elem.price}</div>
              <button className={classes.button}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Accessories;
