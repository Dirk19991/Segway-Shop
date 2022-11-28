import classes from './Categories.module.css';
import Accessories from '../../../assets/images/scooters/Accessories.png';
import { HashLink } from 'react-router-hash-link';
import categories from '../../../data/categories.json';
import { Category } from '../featuredScooter/FeaturedScooter';
import { useDispatch } from 'react-redux';
import { toggleModal, chooseItem } from '../../modal/modalSlice';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useMediaQuery } from 'react-responsive';

function Categories() {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const categoriesJSX = (
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
              src={require(`../../../assets/images/scooters/${elem.image}.png`)}
            ></img>
          </div>
          <div className={classes.itemName}>{elem.name}</div>
        </div>
      ))}

      <div className={classes.item}>
        <div className={classes.accessories}>
          <HashLink smooth to='/#accessories'>
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

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <>
      {isMobile ? (
        <Slider className={classes.slider} {...settings}>
          {categories.map((elem: Category) => (
            <div className={classes.item}>
              <div
                className={classes.sliderFlex}
                onClick={() => {
                  dispatch(toggleModal(true));
                  dispatch(chooseItem(elem));
                }}
              >
                <img
                  alt={elem.image}
                  src={require(`../../../assets/images/scooters/${elem.image}.png`)}
                ></img>
                <div className={classes.itemName}>{elem.name}</div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className={classes.wrapper}>
          <div className={classes.categories}>{categoriesJSX}</div>
        </div>
      )}
    </>
  );
}
export default Categories;
