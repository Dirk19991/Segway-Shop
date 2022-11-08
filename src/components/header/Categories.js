import classes from './Categories.module.css';
import Accessories from '../../assets/images/scooters/Accessories.png';
import { Link } from 'react-scroll';
import { useState } from 'react';
import categories from '../../data/categories.json';
import ItemModal from '../modal/ItemModal';

function Categories() {
  const [open, setOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.categories}>
        {categories.map((elem) => (
          <div>
            {open && (
              <ItemModal
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
                elem={chosenItem}
              />
            )}
            <div key={elem.id} className={classes.item}>
              <div
                onClick={() => {
                  setOpen((prev) => !prev);
                  setChosenItem(elem.name);
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
            <Link to='accessories' spy={true} smooth={true}>
              <img
                className={classes.accessoriesImage}
                alt='Accessories'
                src={Accessories}></img>
            </Link>
          </div>
          <div className={classes.itemName}>ACCESSORIES</div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
