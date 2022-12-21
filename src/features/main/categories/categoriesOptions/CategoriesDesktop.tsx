import { HashLink } from 'react-router-hash-link';
import { useAppDispatch } from '../../../../app/store';
import categories from '../../../../data/categories.json';
import { chooseItem, toggleModal } from '../../../modal/modalSlice';
import { Category } from '../../featuredScooter/FeaturedScooter';
import Accessories from '../../../../assets/images/scooters/Accessories.png';
import classes from '../Categories.module.css';

function CategoriesDesktop() {
  const dispatch = useAppDispatch();

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <>
      {categories.map((elem: Category) => (
        <div key={elem.id} className={classes.item}>
          <div
            onClick={() => {
              dispatch(toggleModal(true));
              dispatch(chooseItem(elem));
            }}
          >
            <img
              alt={elem.image}
              src={require(`../../../../assets/images/scooters/${elem.image}.png`)}
            ></img>
          </div>
          <div className={classes.itemName}>{elem.name}</div>
        </div>
      ))}

      <div className={classes.item}>
        <div className={classes.accessories}>
          <HashLink
            smooth
            to='/#accessories'
            scroll={(el) => scrollWithOffset(el)}
          >
            <img
              className={classes.accessoriesImage}
              alt='Accessories'
              src={Accessories}
            ></img>
          </HashLink>
        </div>
        <div className={classes.itemName}>ACCESSORIES</div>
      </div>
    </>
  );
}

export default CategoriesDesktop;
