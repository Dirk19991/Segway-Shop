import classes from './Categories.module.css';
import Accessories from '../../assets/images/scooters/Accessories.png';
import { HashLink } from 'react-router-hash-link';
import categories from '../../data/categories.json';

import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, chooseItem } from '../../store/modalSlice';

function Categories() {
  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      <div className={classes.categories}>
        {categories.map((elem) => (
          <div>
            <div key={elem.id} className={classes.item}>
              <div
                onClick={() => {
                  dispatch(toggleModal(true));
                  dispatch(chooseItem(elem));
                }}>
                <img
                  alt={elem.image}
                  src={require(`../../assets/images/scooters/${elem.image}.png`)}></img>
              </div>
              <div className={classes.itemName}>{elem.name}</div>
            </div>
          </div>
        ))}

        <div className={classes.item}>
          <div className={classes.accessories}>
            <HashLink smooth to='/#accessories'>
              <img
                className={classes.accessoriesImage}
                alt='Accessories'
                src={Accessories}></img>
            </HashLink>
          </div>
          <div className={classes.itemName}>ACCESSORIES</div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
